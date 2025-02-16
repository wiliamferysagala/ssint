import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { RouterProvider } from "react-router-dom";
import router from "./lib/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
