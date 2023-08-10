import React from "react";
import ReactDOM from "react-dom/client";

import "@bootstrap/env";
import { initMock } from "@mocks/index";

if (import.meta.env.VITE_API_MOCKING) {
  initMock();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);
