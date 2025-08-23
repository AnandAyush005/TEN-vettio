import mongoose from "mongoose";
import validator from "validator"; // npm install validator

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [3, "Username must be at least 3 characters"],
    maxlength: [30, "Username cannot exceed 30 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
  },
  role: {
    type: String,
    enum: {
      values: ["recruiter", "jobseeker"],
      message: "Role must be either recruiter or jobseeker",
    },
    required: [true, "Role is required"],
  },
  provider: {
    type: String,
    default: "credentials", // google/github/discord/credentials
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
