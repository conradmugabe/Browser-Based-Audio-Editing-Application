import React from "react";
import ReactDOM from "react-dom/client";

import AppProviders from "@src/providers";
import App from "@src/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
