import { Route, Routes } from "react-router-dom";

import Talents from "../pages/talents";
import TalentsCreate from "../pages/talents/pages/create";
import TalentsUpdate from "../pages/talents/pages/update";

export function TalentsRoute() {
  return (
    <Routes>
      <Route path="/" element={<Talents />} />
      <Route path="/create" element={<TalentsCreate />} />
      <Route path="/update/:talentId" element={<TalentsUpdate />} />
    </Routes>
  );
}
