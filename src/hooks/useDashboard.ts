import { useState, useEffect } from "react";

interface IUnits {
  setUnit: (unit: string) => void;
  status: string;
}

interface IGeneration {
  setGeneration: (generation: number) => void;
  energia: number;
}

export const useDashboard = () => {
  const [units, setUnits] = useState<IUnits[]>([]);
  const [generation, setGeneration] = useState<IGeneration[]>([]);

  useEffect(() => {
    const unitsData = localStorage.getItem("unitsData") || "[]";
    const generationData = localStorage.getItem("monthlyData") || "[]";

    if (unitsData && generationData) {
      try {
        setUnits(JSON.parse(unitsData) as IUnits[]);
        setGeneration(JSON.parse(generationData) as IGeneration[]);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  return {
    units,
    generation,
  }
}