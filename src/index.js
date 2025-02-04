import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import counterContext from "./context/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
let user = {
  name: "kishor",
};
root.render(
  <React.StrictMode>
    <counterContext.Provider value={user}>
      <App />
    </counterContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
