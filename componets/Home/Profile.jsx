"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const { data: session, status } = useSession();

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;
  if (!session) return <p className="text-center mt-10">Not signed in</p>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="flex-1 pt-28 px-4 flex justify-center items-start">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Profile Avatar */}
          <div className="flex justify-center">
            <Image
              src={"/profile-icon-design-free-vector.jpg"}
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full shadow-md"
            />
          </div>

          {/* User Info */}
          <h1 className="text-2xl font-bold mt-4">{session.user.name}</h1>
          <p className="text-gray-600">{session.user.email}</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full">
            {session.user.role || "No role assigned"}
          </span>

          {/* Company / Platform Description */}
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            Vettio is an <span className="font-semibold">AI recruitment platform</span> 
            that finds, evaluates, interviews and matches the best talent for employers.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="/find_jobs"
              className="w-full px-6 py-3 rounded-lg bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
            >
              Find Jobs
            </a>
            <button
              onClick={handleSignOut}
              className="w-full px-6 py-3 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
