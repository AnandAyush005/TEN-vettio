"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CompleteProfile() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const provider = searchParams.get("provider");
  const name = searchParams.get("name");

  const [form, setForm] = useState({
    username: name || "",
    role: "",
    age: "",
    dob: "",
    country: "",
    education: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ✅ Age–DOB validation
  const birthDate = new Date(form.dob);
  const today = new Date();
  let calculatedAge = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    calculatedAge--;
  }

  if (parseInt(form.age) !== calculatedAge) {
    alert(
      `Age (${form.age}) and DOB (${form.dob}) do not match. Calculated age: ${calculatedAge}`
    );
    return; // stop submission
  }

    const res = await fetch("/api/save-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, email, provider }),
    });

    if (res.ok) {
      router.push("/"); // Or trigger signIn again if needed
    } else {
      const data = await res.json();
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow w-96 space-y-4"
      >
        <h2 className="mb-4 text-lg font-bold">Complete Your Profile</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Choose a role</option>
          <option value="jobseeker">Jobseeker</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
          min="18"
          max="100"
        />

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="education"
          placeholder="Education"
          value={form.education}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}
