import { render, screen, waitFor } from "../test-utils";
import { server } from "../mocks/server";
import { getUsersError } from "../mocks/users";
import UserList from "../../src/users/UserList";

describe("UserList", () => {
  it("renders fetched user list", async () => {
    render(<UserList />);

    const users = await screen.findAllByRole("listitem");

    expect(users).toHaveLength(3);
  });

  it("renders error message if items are not fetched successfully", async () => {
    server.use(getUsersError);
    render(<UserList />);

    const paragraph = await screen.findByText(/error/i);

    expect(paragraph).toBeInTheDocument();
  });

  it("renders a loading state when user list is being fetching", async () => {
    render(<UserList />);

    const paragraph = screen.getByText(/loading/i);

    expect(paragraph).toBeInTheDocument();
  });

  it("does not render a loading state when users list has been fetched", async () => {
    render(<UserList />);

    const paragraph = screen.queryByText(/loading/i);
    expect(paragraph).toBeInTheDocument();

    await waitFor(() => expect(paragraph).not.toBeInTheDocument());
    const users = screen.queryAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  it("does not render a loading state when an error occurs", async () => {
    server.use(getUsersError);
    render(<UserList />);

    expect(screen.queryByText(/loading/i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
    );

    expect(screen.queryByText(/error/i)).toBeInTheDocument();
  });
});
