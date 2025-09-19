import React from "react";
import { useBooking } from "../app/BookingProvider";
import {useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BookButton() {
  const { setOpen } = useBooking();
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <button
      onClick={session ? () => setOpen(true) : ()=> router.push('/')}
      className="px-8 py-3 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors"
    >
      Book a demo
    </button>
  );
}
