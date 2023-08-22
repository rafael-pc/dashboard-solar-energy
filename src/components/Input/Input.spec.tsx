import { render, screen } from "@testing-library/react";
import Input from "./Input";
import "@testing-library/jest-dom";

describe("Input", () => {
  it("renders the label and input correctly", () => {
    const label = "Test Label";
    const { asFragment } = render(<Input label={label} />);
    expect(asFragment()).toMatchSnapshot();

    const inputLabel = screen.getByText(label);
    expect(inputLabel).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
