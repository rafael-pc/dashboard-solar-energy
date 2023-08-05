import { FC, useState, useEffect } from "react";
import * as S from "./Chart.styled";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface IDataItem {
  date: string;
  energia: number;
}

const Linechart: FC = () => {
  const [data, setData] = useState<IDataItem[]>([]);

  useEffect(() => {
    const generationData = localStorage.getItem("monthlyData") || "[]";
    try {
      setData(JSON.parse(generationData) as IDataItem[]);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, []);

  const totalEnergiaPorMes = Array(12).fill(0);

  data.forEach(({ date, energia }) => {
    const month = Number(date.split("-")[1]) - 1;
    totalEnergiaPorMes[month] += energia;
  });

  const labels = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

  return (
    <S.ContainerChart>
      <Line
        className="line"
        data={{
          labels: labels,
          datasets: [
            {
              label: "Total de energia gerada por mês",
              data: totalEnergiaPorMes,
              borderColor: ["#44c662"],
              tension: 0.4,
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={200}
        options={{
          maintainAspectRatio: false,
        }}
      ></Line>
    </S.ContainerChart>
  );
};

export default Linechart;
