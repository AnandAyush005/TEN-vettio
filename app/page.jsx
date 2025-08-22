"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // don't let next-auth redirect
    router.push("/login");              // manually redirect
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 w-[90%] max-w-md text-center">
        <h1 className="text-3xl font-extrabold mb-4">👋 !Welcome! 👋</h1>
        <p className="text-lg mb-6">
          You have successfully signed in. Explore your dashboard 🚀
        </p>

        <button
          onClick={handleSignOut}
          className="w-full py-3 px-6 rounded-xl bg-red-500 hover:bg-red-600 active:scale-95 font-semibold text-white shadow-lg transition-transform duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
