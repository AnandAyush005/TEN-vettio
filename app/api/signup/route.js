import { connectDB } from "../../lib/DbConnection.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectDB();
    const { username, email, password, role } = await req.json();

    // Pre-hash validation
    if (password.length < 8) {
      return new Response(
        JSON.stringify({ error: "Password must be at least 8 characters" }),
        { status: 400 }
      );
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return new Response(
        JSON.stringify({ error: "Email already exists" }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword, role, provider: "credentials" });

    try {
      await newUser.save();
      return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });
    } catch (err) {
      // Mongoose validation errors
      if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((e) => e.message);
        return new Response(JSON.stringify({ error: messages.join(", ") }), { status: 400 });
      }
      throw err;
    }
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
