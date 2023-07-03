import { PropsWithChildren } from "react";

import ReactQueryProvider from "./ReactQueryProvider";

export default function AppProviders({ children }: PropsWithChildren) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
