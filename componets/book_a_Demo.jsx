import React from "react";
import { useBooking } from "../app/BookingProvider";


export default function BookButton() {
  const { setOpen } = useBooking();

  return (
    <button
      onClick={() => setOpen(true)}
      className="text-sm font-GothamMedium bg-yellow-500 text-black hover:bg-white hover:text-black border-yellow-500 hover:border-black rounded-lg border-2 w-[159px] h-[48px] Mobile:w-full Mobile:h-[45px] hover:border-2 transform transition ease-in-out duration-400 hover:shadow-md"
    >
      Book a demo
    </button>
  );
}
