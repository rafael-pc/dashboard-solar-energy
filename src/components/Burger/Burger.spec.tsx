import { render, fireEvent } from "@testing-library/react";
import Burger from "./Burger";

describe("Burger", () => {
  it("renders correctly when closed", () => {
    const setOpen = jest.fn();
    const { container } = render(<Burger isOpen={false} setOpen={setOpen} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly when open", () => {
    const setOpen = jest.fn();
    const { container } = render(<Burger isOpen={true} setOpen={setOpen} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls setOpen with the opposite value when clicked", () => {
    const setOpen = jest.fn();
    const { getByLabelText } = render(
      <Burger isOpen={false} setOpen={setOpen} />
    );
    fireEvent.click(getByLabelText("Toggle menu"));
    expect(setOpen).toHaveBeenCalledWith(true);
  });
});
