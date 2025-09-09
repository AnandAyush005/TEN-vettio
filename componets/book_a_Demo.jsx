import React from "react";
import { useBooking } from "../app/BookingProvider";


export default function BookButton() {
  const { setOpen } = useBooking();

  return (
    <button
      onClick={() => setOpen(true)}
      className="px-8 py-3 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors"
    >
      Book a demo
    </button>
  );
}
