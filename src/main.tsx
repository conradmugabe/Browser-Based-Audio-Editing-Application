import React from "react";
import ReactDOM from "react-dom/client";

import App from "@src/App";
import AppProviders from "@src/providers";
import { initMock } from "@mocks/index";

if (import.meta.env.VITE_API_MOCKING) {
  await initMock();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
