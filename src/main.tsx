import { createRoot, type Root } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App.js";
import "./style.css";

const container = document.getElementById("app");
if (!container)
  throw new Error(
    "Failed to find the root element with ID 'app'. Check your index.html"
  );
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
