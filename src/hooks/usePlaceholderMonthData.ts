interface Item {
  id: number;
  unidade: string;
  date: string;
  energia: number;
}

interface Unit {
  id: number;
  apelido: string;
  local: string;
  marca: string;
  modelo: string;
  status: string;
}

export const usePlaceholderMonthData = (): void => {
  const data: Unit[] = JSON.parse(localStorage.getItem("monthlyData") || "[]");
  const ids: number[] = data.map((item: Unit) => item.id);
  const hasIdGreater: boolean = ids.some((id) => id >= 23);

  if (!hasIdGreater) {
    document.addEventListener("DOMContentLoaded", () => {
      const items: Item[] = [
        { id: 1, unidade: "1", date: "2023-01", energia: 300 },
        { id: 2, unidade: "2", date: "2023-02", energia: 150 },
        { id: 3, unidade: "3", date: "2023-03", energia: 200 },
        { id: 4, unidade: "4", date: "2023-04", energia: 250 },
        { id: 5, unidade: "2", date: "2023-05", energia: 150 },
        { id: 6, unidade: "4", date: "2023-06", energia: 200 },
        { id: 7, unidade: "1", date: "2023-07", energia: 300 },
        { id: 8, unidade: "1", date: "2023-08", energia: 150 },
        { id: 9, unidade: "1", date: "2023-09", energia: 200 },
        { id: 10, unidade: "2", date: "2023-10", energia: 300 },
        { id: 11, unidade: "4", date: "2023-11", energia: 150 },
        { id: 12, unidade: "1", date: "2023-12", energia: 200 },
        { id: 13, unidade: "2", date: "2023-07", energia: 400 },
        { id: 14, unidade: "3", date: "2023-08", energia: 900 },
        { id: 15, unidade: "4", date: "2023-09", energia: 700 },
        { id: 16, unidade: "2", date: "2023-10", energia: 600 },
        { id: 17, unidade: "4", date: "2023-09", energia: 800 },
        { id: 18, unidade: "1", date: "2023-11", energia: 700 },
        { id: 19, unidade: "1", date: "2023-12", energia: 900 },
        { id: 20, unidade: "1", date: "2023-12", energia: 400 },
        { id: 21, unidade: "2", date: "2023-11", energia: 600 },
        { id: 22, unidade: "4", date: "2023-07", energia: 500 },
        { id: 23, unidade: "2", date: "2023-10", energia: 600 },
        { id: 24, unidade: "3", date: "2023-06", energia: 400 },
      ];

      localStorage.setItem("monthlyData", JSON.stringify(items));
    });
  }
};
