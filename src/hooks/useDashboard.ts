import { useState, useEffect } from "react";

interface Units {
  setUnit: (unit: string) => void;
  status: string;
}

interface Generation {
  setGeneration: (generation: number) => void;
  energia: number;
}

export const useDashboard = () => {
  const [units, setUnits] = useState<Units[]>([]);
  const [generation, setGeneration] = useState<Generation[]>([]);

  useEffect(() => {
    const unitsData = localStorage.getItem("unitsData") || "[]";
    const generationData = localStorage.getItem("monthlyData") || "[]";

    if (unitsData && generationData) {
      try {
        setUnits(JSON.parse(unitsData) as Units[]);
        setGeneration(JSON.parse(generationData) as Generation[]);
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