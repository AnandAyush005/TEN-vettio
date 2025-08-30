"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    age: "",
    dob: "",
    country: "",
    education: "",
  });
  const [errors, setErrors] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const birthDate = new Date(form.dob);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--; // adjust if birthday hasn't occurred yet this year
    }

    if (parseInt(form.age) !== calculatedAge) {
      setErrors(`Age (${form.age}) and DOB (${form.dob}) do not match. Calculated age: ${calculatedAge}`);
      return; // stop submission
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/login");
    } else {
      setErrors(data.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-purple-500 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>

        {errors && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {errors}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="username" placeholder="Username" onChange={handleChange} value={form.username} required className="px-4 py-2 border rounded-md" />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} value={form.email} required className="px-4 py-2 border rounded-md" />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} required className="px-4 py-2 border rounded-md" />
          <select name="role" onChange={handleChange} value={form.role} required className="px-4 py-2 border rounded-md">
            <option value="">Select Role</option>
            <option value="recruiter">Recruiter</option>
            <option value="jobseeker">Jobseeker</option>
          </select>

          {/* New fields */}
          <input name="age" type="number" placeholder="Age" onChange={handleChange} value={form.age} required className="px-4 py-2 border rounded-md" />
          <input name="dob" type="date" onChange={handleChange} value={form.dob} required className="px-4 py-2 border rounded-md" />
          <input name="country" placeholder="Country" onChange={handleChange} value={form.country} required className="px-4 py-2 border rounded-md" />
          <input name="education" placeholder="Education" onChange={handleChange} value={form.education} required className="px-4 py-2 border rounded-md" />

          <button type="submit" className="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
