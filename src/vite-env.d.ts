/// <reference types="vite/client" />

import { z } from "zod";

import { environmentVariables } from "@bootstrap/env";

interface ImportMeta {
  readonly env: z.infer<typeof environmentVariables>;
}
