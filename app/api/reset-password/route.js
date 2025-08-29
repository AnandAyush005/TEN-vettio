import bcrypt from "bcrypt";
import { resetPasswordSchema } from "../../lib/validation";
import { connectDB } from "../../lib/DbConnection";
import User from "../../models/User";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate input
    const parsed = resetPasswordSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.issues.map(e => e.message).join(", ") }),
        { status: 400 }
      );
    }

    const { token, password } = parsed.data;

    // Find user with valid token
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid or expired token" }), { status: 400 });
    }

    // Hash new password
    user.password = await bcrypt.hash(password, 10);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    return new Response(JSON.stringify({ message: "Password reset successful" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
