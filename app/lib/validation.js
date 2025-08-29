import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(30),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["recruiter", "jobseeker"], {
    errorMap: () => ({ message: "Role must be recruiter or jobseeker" }),
  }),
  age: z
    .number({ invalid_type_error: "Age must be a number" })
    .min(18, "Age must be at least 18")
    .max(100, "Age must be less than 100"),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid Date of Birth",
  }),
  country: z.string().min(2, "Country is required"),
  education: z.string().min(2, "Education is required"),
});


export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});

export const resetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
