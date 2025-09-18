"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email to reset password"),
});

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    // Submission handled by isSubmitting automatically, so no manual loading state needed
    const res = await fetch("/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      alert("Password reset link sent! Check your email.");
    } else {
      alert(result.error || "Something went wrong");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-600"
          }`}
        >
          {isSubmitting && (
            <svg className="animate-spin w-5 h-5 mr-2 text-white" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          )}
          {isSubmitting ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
