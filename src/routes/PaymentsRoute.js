import { Route, Routes } from "react-router-dom";

import Payments from "../pages/payments";
import PaymentsCreate from "../pages/payments/pages/create";
import PaymentsUpdate from "../pages/payments/pages/update";

export function PaymentsRoute() {
  return (
    <Routes>
      <Route path="/" element={<Payments />} />
      <Route path="/create" element={<PaymentsCreate />} />
      <Route path="/update/:paymentId" element={<PaymentsUpdate />} />
    </Routes>
  );
}
