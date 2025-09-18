import { forgotPasswordSchema } from "../../lib/validation";
import { connectDB } from "../../lib/DbConnection";
import User from "../../models/User";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate input
    const parsed = forgotPasswordSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.issues.map(e => e.message).join(", ") }),
        { status: 400 }
      );
    }

    const { email } = parsed.data;
    const user = await User.findOne({ email });
    console.log("User : ",user)
    
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    // Generate token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour

    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    console.log("User-2 : ",user)
    await user.save();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;
    await transporter.sendMail({
      from: `"Support" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Password Reset Request",
      html: `
        <p>You requested to reset your password.</p>
        <p>Click below link to reset:</p>
        <a href="${resetUrl}">${resetUrl}</a>
        <p>This link will expire in 1 hour.</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Password reset link sent to email" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
