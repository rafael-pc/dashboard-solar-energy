import { render } from "@testing-library/react";
import Cards from "./Cards";

describe("Cards", () => {
  it("renders correctly", () => {
    const data1 = [
      { status: "ativo" },
      { status: "ativo" },
      { status: "inativo" },
    ];
    const data2 = [
      { energia: 10 },
      { energia: 20 },
      { energia: 30 },
    ];
    const { container } = render(<Cards data1={data1} data2={data2} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
