import mongoose from "mongoose";
import validator from "validator";

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
    minlength: [8, "Password must be at least 8 characters"],
  },
  role: {
    type: String,
    enum: ["recruiter", "jobseeker"],
    required: [true, "Role is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Age must be at least 18"],
    max: [100, "Age must be less than 100"],
  },
  dob: {
    type: Date,
    required: [true, "Date of Birth is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  education: {
    type: String,
    required: [true, "Education is required"],
  },
  provider: {
    type: String,
    default: "credentials",
  },

  // ✅ Add these for forgot/reset password
  resetToken: String,
  resetTokenExpiry: Date,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
