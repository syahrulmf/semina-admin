import React, { useEffect } from "react";
import { listen } from "./redux/listener";
import { AppRoutes } from "./routes";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return <AppRoutes />;
}

export default App;
