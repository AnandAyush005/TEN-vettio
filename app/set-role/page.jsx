import SelectRole from "../../componets/select-role.jsx"
import { Suspense } from "react";

export default function SetRolePage() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading role form...</div>}>
      <SelectRole />
    </Suspense>
  );
}
