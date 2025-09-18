"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/Home";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setLoginError("");

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl,
    });

    if (!res.error) {
      router.push(callbackUrl);
    } else {
      setLoginError("Login failed: " + res.error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Login to <span className="text-indigo-500">Vettio</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email")}
              className="px-4 py-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              {...register("password")}
              className="px-4 py-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-between items-center mt-2">
            <Link
              href="/forgot-password"
              className="text-sm text-indigo-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {loginError && (
            <p className="text-red-500 text-sm text-center">{loginError}</p>
          )}

          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <svg className="animate-spin w-5 h-5 mr-2 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            )}
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="my-6 flex items-center justify-center gap-2">
          <span className="h-px bg-gray-300 flex-1"></span>
          <span className="text-gray-500 text-sm">OR</span>
          <span className="h-px bg-gray-300 flex-1"></span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => signIn("google", { callbackUrl })}
            className="flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Login with Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl })}
            className="flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Login with GitHub
          </button>

          <button
            onClick={() => signIn("discord", { callbackUrl })}
            className="flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Login with Discord
          </button>
        </div>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-500 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}