import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../src/App";

describe("App", () => {
  it("it renders", async () => {
    render(<App />);

    const button = screen.getByTestId("button");
    expect(button.textContent).toBe("0");

    await userEvent.click(button);

    expect(button.textContent).toBe("1");
  });
});
