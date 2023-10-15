import { RouterProvider } from "react-router-dom";

import { authenticatedRoutes } from "@ui/routes/routes";

export function AuthenticatedApp() {
  return <RouterProvider router={authenticatedRoutes}></RouterProvider>;
}
