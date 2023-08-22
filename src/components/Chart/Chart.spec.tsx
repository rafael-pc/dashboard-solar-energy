import { render } from "@testing-library/react";
import Linechart from "./Chart";
import "@testing-library/jest-dom";

jest.mock("react-chartjs-2", () => ({
  Line: () => null,
}));

describe("Linechart", () => {
  it("renders the chart with the correct data", () => {
    const mockData = [
      { date: "2023-01-01", energia: 10 },
      { date: "2023-02-01", energia: 20 },
      { date: "2023-03-01", energia: 30 },
    ];
    localStorage.setItem("monthlyData", JSON.stringify(mockData));

    const { asFragment } = render(<Linechart />);
    expect(asFragment()).toMatchSnapshot();
  });
});
