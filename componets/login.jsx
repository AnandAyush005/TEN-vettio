"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
      callbackUrl: "/",
    });

    if (!res.error) router.push("/");
    else alert("Login failed");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          🔑 Login to <span className="text-indigo-500">Vettio</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center gap-2">
          <span className="h-px bg-gray-300 flex-1"></span>
          <span className="text-gray-500 text-sm">OR</span>
          <span className="h-px bg-gray-300 flex-1"></span>
        </div>

        {/* OAuth buttons */}
{/* OAuth buttons */}
<div className="flex flex-col gap-3">
  <button
    onClick={() => signIn("google", { callbackUrl: "/" })}
    className="flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition"
  >
    {/* Google Icon */}
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#EA4335"
        d="M12 10.2v3.6h5.1c-.2 1.3-1.5 3.8-5.1 3.8-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6c1.8 0 3 .7 3.7 1.4l2.5-2.5C16.6 3.5 14.5 2.6 12 2.6 6.9 2.6 2.6 6.9 2.6 12S6.9 21.4 12 21.4c6.2 0 10.3-4.3 10.3-10.3 0-.7-.1-1.3-.2-1.9H12z"
      />
    </svg>
    Login with Google
  </button>

  <button
    onClick={() => signIn("github", { callbackUrl: "/" })}
    className="flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition"
  >
    {/* GitHub Icon */}
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.262.82-.582 
        0-.288-.012-1.244-.018-2.256-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.082-.729.082-.729 
        1.205.085 1.84 1.238 1.84 1.238 1.07 1.83 2.807 1.302 3.492.996.108-.774.418-1.302.762-1.602-2.665-.3-5.466-1.333-5.466-5.933 
        0-1.31.468-2.38 1.235-3.22-.123-.303-.54-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.02.005 2.047.138 
        3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.66 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 
        0 4.61-2.805 5.63-5.478 5.922.43.37.823 1.102.823 2.222 
        0 1.606-.015 2.898-.015 3.293 0 .324.217.702.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"
        clipRule="evenodd"
      />
    </svg>
    Login with GitHub
  </button>

  <button
    onClick={() => signIn("discord", { callbackUrl: "/" })}
    className="flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition"
  >
    {/* Discord Icon */}
    <svg
      className="w-5 h-5"
      viewBox="0 0 245 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#5865F2"
        d="M104.4 104.1c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.2-5 
        10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1 
        0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
      />
      <path
        fill="#5865F2"
        d="M189.5 20h-134C24.4 20 0 44.4 0 74.5v91c0 30.1 24.4 54.5 55.5 54.5h113.2l-5.3-18.5 
        12.9 11.9 11.7 10.8 20.8 18.8V74.5C208.8 44.4 184.4 20 153.3 20z"
      />
    </svg>
    Login with Discord
  </button>
</div>


        {/* Navigation to signup */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-500 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
