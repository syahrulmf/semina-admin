import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
