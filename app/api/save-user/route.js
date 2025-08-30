import { connectDB } from "../../lib/DbConnection"
import User from "../../models/User";

export async function POST(req) {
  try {
    await connectDB();
    const { username, email, role, age, dob, country, education, provider } =
      await req.json();

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User already exists" }),
        { status: 400 }
      );
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      role,
      age,
      dob,
      country,
      education,
      provider,
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error", details: err.message }),
      { status: 500 }
    );
  }
}
