import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "@auth/ui/pages/LoginPage";

export const unauthenticatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

export const authenticatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <div>Authenticated</div>,
  },
]);
