/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, useEffect } from "react";
import { ContainerChart } from "./Chart.styled";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
Chart.register(...registerables);

interface DataItem {
  date: string;
  energia: number;
}

const Linechart: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const generationData = localStorage.getItem("monthlyData") || "[]";
    try {
      setData(JSON.parse(generationData) as DataItem[]);
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
    <ContainerChart>
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
    </ContainerChart>
  );
};

export default Linechart;
