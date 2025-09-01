"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {Check, X } from "lucide-react";
import { toast } from "react-toastify";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });

      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });

      cal("on", {
        action: "bookingSuccessful",
        callback: (event) => {
          toast.success("Meeting scheduled successfully!");
          console.log("Booking successful:", event);
        },
      });

      cal("on", {
        action: "bookingFailed",
        callback: () => {
          toast.error("Failed to schedule meeting. Try again.");
        },
      });
    })();
  }, []);

  return (
    <BookingContext.Provider value={{ open, setOpen }}>
      {children}

      {open && (
        <section className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <article className="flex justify-start items-start bg-white rounded-2xl shadow-lg w-14/16 h-12/17 px-5 py-4">
            <Cal
              namespace="30min"
              calLink="dibyajit-nandi/30min"
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{ layout: "month_view", theme: "light" }}
            />
            <button
              onClick={() => setOpen(false)}
              className="text-xl font-bold"
            >
              <X className="size-5 z-10" />
            </button>
          </article>
        </section>
      )}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
