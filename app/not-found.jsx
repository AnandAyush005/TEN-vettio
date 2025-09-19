"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/Home");
  }, [router]);

  return null; // or a loading indicator while redirecting
}
