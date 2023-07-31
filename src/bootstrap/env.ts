import { z } from "zod";

export const environmentVariables = z.object({
  VITE_API_MOCKING: z.string().optional(),
  VITE_BASE_URL: z.string(),
  VITE_USERS_ENDPOINT: z.string(),
});

environmentVariables.parse(import.meta.env);
