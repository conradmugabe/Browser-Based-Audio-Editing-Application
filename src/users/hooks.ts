import { useQuery } from "@tanstack/react-query";

import { userService } from "./service";

export const useUsers = () => {
  return useQuery({
    queryFn: userService.getMany,
    queryKey: ["users"],
  });
};
