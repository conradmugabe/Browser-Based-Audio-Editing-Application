import { z } from "zod";

export const environmentVariables = z.object({
  VITE_API_MOCKING: z.string().optional(),
  VITE_HTTP_TEST_SERVICE_URL: z.string(),
  VITE_TEST_ENDPOINT: z.string(),
});

environmentVariables.parse(import.meta.env);
