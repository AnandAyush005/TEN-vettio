"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const resetSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm Password is required"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [serverError, setServerError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = async (data) => {
    if (!token) {
      setServerError("Missing token.");
      return;
    }

    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: data.password }),
      });

      if (!res.ok) {
        const err = await res.json();
        setServerError(err.error || "Something went wrong");
        return;
      }

      setSuccessMsg("✅ Password reset successfully! Redirecting...");
      setTimeout(() => router.push("/login"), 2000);
    } catch {
      setServerError("Server error. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-2xl shadow-md w-96">
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>

      <input type="password" placeholder="New Password" {...register("password")} className="w-full p-2 border rounded-md mb-2" />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} className="w-full p-2 border rounded-md mb-2" />
      {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

      {serverError && <p className="text-red-500 text-sm">{serverError}</p>}
      {successMsg && <p className="text-green-500 text-sm">{successMsg}</p>}

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Reset Password</button>
    </form>
  );
}