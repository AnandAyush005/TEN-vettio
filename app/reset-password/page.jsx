import { Suspense } from "react";
import ResetPasswordForm from "../../componets/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Suspense fallback={<div>Loading form...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}