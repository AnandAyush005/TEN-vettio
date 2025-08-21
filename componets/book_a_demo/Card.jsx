"use client"

import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {X} from "lucide-react";

const Card = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="flex justify-center mt-10">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className=" text-sm font-GothamMedium bg-amber-500 text-black hover:bg-white hover:text-black border-amber-500 hover:border-black rounded-lg border-2 w-[159px] h-[48px] Mobile:w-full Mobile:h-[45px] hover:border-2
        transform transition ease-in-out duration-400 hover:shadow-md undefined"
      >
        Book a demo
      </button>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
          <div className="flex justify-start items-start bg-white rounded-2xl shadow-lg w-14/16 h-12/17 px-5 py-4 ">

            {/* Calendar Embed */}
            <Cal
              namespace="30min"
              calLink="dibyajit-nandi/30min"
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{ layout: "month_view", theme: "light" }}
            />
            {/* Close Button  */}
            <button
              onClick={() => setOpen(false)}
              className="text-xl font-bold"
            >
              <X className="size-5"/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
