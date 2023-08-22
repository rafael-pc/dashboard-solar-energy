import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders the title correctly", () => {
    const title = "Test Title";
    const { asFragment } = render(<Header title={title} />);
    expect(asFragment()).toMatchSnapshot();

    const headerTitle = screen.getByRole("heading", { name: title });
    expect(headerTitle).toBeInTheDocument();
  });
});
