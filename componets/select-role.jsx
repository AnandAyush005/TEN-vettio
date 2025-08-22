"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SelectRole() {
  const { data: session } = useSession();
  const router = useRouter();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!role) {
      alert("⚠️ Please select a role before saving.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/set-role", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: session.user.email, role }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      alert("Failed to save role. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Choose Your Role
        </h1>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          <option value="">-- Select Role --</option>
          <option value="recruiter">Recruiter</option>
          <option value="jobseeker">Jobseeker</option>
        </select>

        <button
          onClick={handleSave}
          disabled={loading}
          className={`mt-6 w-full py-3 rounded-xl text-white font-semibold transition 
            ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
}
