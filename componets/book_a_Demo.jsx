import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react"; // ✅ Cal as default
import { X } from "lucide-react";

export default function Book() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section>
      <button
        onClick={() => setOpen(true)}
        className="text-sm font-GothamMedium bg-yellow-500 text-black hover:bg-white hover:text-black border-yellow-500 hover:border-black rounded-lg border-2 w-[159px] h-[48px] Mobile:w-full Mobile:h-[45px] hover:border-2 transform transition ease-in-out duration-400 hover:shadow-md"
      >
        Book a demo
      </button>

      {open && (
        <section className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <article className="flex justify-start items-start bg-white rounded-2xl shadow-lg w-14/16 h-12/17 px-5 py-4">
            <Cal
              namespace="30min"
              calLink="dibyajit-nandi/30min"
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{ layout: "month_view", theme: "light" }}
            />
            <button onClick={() => setOpen(false)} className="text-xl font-bold">
              <X className="size-5 z-10" />
            </button>
          </article>
        </section>
      )}
    </section>
  );
}
