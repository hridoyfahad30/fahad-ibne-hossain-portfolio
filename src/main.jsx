import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-[1920] mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </div>
);
