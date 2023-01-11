import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";

// const useQuery = () => {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// };

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
