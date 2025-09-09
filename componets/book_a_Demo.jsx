import React from "react";
import { useBooking } from "../app/BookingProvider";


export default function BookButton() {
  const { setOpen } = useBooking();

  return (
    <button
      onClick={() => setOpen(true)}
<<<<<<< HEAD
      className="text-sm font-GothamMedium bg-yellow-500 text-black hover:bg-white hover:text-black border-yellow-500 hover:border-black rounded-lg border-2 w-[159px] h-[48px] Mobile:w-full Mobile:h-[45px] hover:border-2 transform transition ease-in-out duration-400 hover:shadow-md"
=======
      className="px-8 py-3 rounded-lg bg-yellow-500 text-black border-2 border-transparent hover:border-black hover:bg-white transition-colors"
>>>>>>> 9f61f420b025da5af59e58bc0b63da909dc1be19
    >
      Book a demo
    </button>
  );
}
