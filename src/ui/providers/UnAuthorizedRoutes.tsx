import { RouterProvider } from "react-router-dom";

import { unauthenticatedRoutes } from "@ui/routes/routes";

export function UnauthenticatedApp() {
  return <RouterProvider router={unauthenticatedRoutes}></RouterProvider>;
}
