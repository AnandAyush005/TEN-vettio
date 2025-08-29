import { connectDB } from "../../lib/DbConnection.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";
import { signupSchema } from "../../lib/validation.js";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // ✅ Zod validation
    const parsed = signupSchema.safeParse({
      ...body,
      age: Number(body.age), // convert string → number
    });

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.issues.map((e) => e.message).join(", ") }),
        { status: 400 }
      );
    }

    const { username, email, password, role, age, dob, country, education } = parsed.data;

    const existing = await User.findOne({ email });
    if (existing) {
      return new Response(
        JSON.stringify({ error: "Email already exists" }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      age,
      dob: new Date(dob),
      country,
      education,
      provider: "credentials",
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
