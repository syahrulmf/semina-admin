import { Route, Routes } from "react-router-dom";

import Events from "../pages/events";
import EventsCreate from "../pages/events/pages/create";
import EventsUpdate from "../pages/events/pages/update";

export function EventsRoute() {
  return (
    <Routes>
      <Route path="/" element={<Events />} />
      <Route path="/create" element={<EventsCreate />} />
      <Route path="/update/:eventId" element={<EventsUpdate />} />
    </Routes>
  );
}
