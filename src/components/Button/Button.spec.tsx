import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick}>Click me</Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(onClick).toHaveBeenCalled();
  });
});
