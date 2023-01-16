import { Navigate, Route, Routes } from "react-router-dom";

import SNavbar from "../components/Navbar";

import Signin from "../pages/signin";

import { CategoriesRoute } from "./CategoriesRoute";
import GuardRoute from "./GuardRoute";
import GuestOnlyRoute from "./GuestOnlyRoute";
import { HomeRoute } from "./HomeRoute";
import { PaymentsRoute } from "./PaymentsRoute";
import { TalentsRoute } from "./TalentsRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="signin"
        element={
          <GuestOnlyRoute>
            <Signin />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <SNavbar />
            <GuardRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="talents/*" element={<TalentsRoute />} />
        <Route path="payments/*" element={<PaymentsRoute />} />
        {/* <Route path="events/*" element={<EventsRoute />} /> */}
        {/* <Route path="orders/*" element={<OrdersRoute />} /> */}
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
}
