import { connectDB } from "../../lib/DbConnection.js";
import User from "../../models/User.js";

export async function POST(req) {
  try {
    await connectDB();

    const { email, role } = await req.json();

    const updated = await User.findOneAndUpdate(
      { email },
      { role },
      { new: true }
    );

    if (!updated) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json({ message: "Role updated", user: updated });
  } catch (error) {
    console.error("🔥 Error updating role:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
