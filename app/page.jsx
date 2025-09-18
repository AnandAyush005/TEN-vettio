import Login from "../componets/login.jsx";
import { Suspense } from "react";

export default function LoginPage() {
  return(
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </>
  )
}
