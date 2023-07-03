import { reactQueryWrapper, waitFor, renderHook } from "../test-utils";
import { server } from "../mocks/server";
import { getUsersError } from "../mocks/users";
import { useUsers } from "../../src/users/hooks";

describe("user hooks", () => {
  it("retrieves user list from repository", async () => {
    const { result } = renderHook(() => useUsers(), {
      wrapper: reactQueryWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("fails to retrieve users from repository", async () => {
    server.use(getUsersError);
    const { result } = renderHook(useUsers, {
      wrapper: reactQueryWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.isError).toBe(true);
    expect(result.current.error).toBeTruthy();
  });
});
