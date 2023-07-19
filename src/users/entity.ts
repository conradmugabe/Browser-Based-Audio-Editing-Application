import { z } from "zod";

const User = z.object({
  id: z.number(),
  name: z.string().nonempty(),
});

type User = z.infer<typeof User>;

export type CreateUser = Omit<User, "id">;

export { User };
