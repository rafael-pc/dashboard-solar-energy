import { useState, useEffect } from "react";

interface Unit {
  id: number;
  [key: string]: string | number;
}

export const useListUnits = () => {
  const [data, setData] = useState<Unit[]>([]);

  useEffect(() => {
    try {
      const getData = localStorage.getItem("unitsData") || "[]";
      if (getData) {
        setData(JSON.parse(getData));
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, []);

  const removeItemFromLocalStorage = (id: number) => {
    const items = JSON.parse(localStorage.getItem("unitsData") || "[]");

    if (items) {
      const updatedItems = items.filter((item: Unit) => item.id !== id);

      localStorage.setItem("unitsData", JSON.stringify(updatedItems));
    }
    removeFromTable(id);
  }

  const removeFromTable = (id: number) => {
    const newData = data.filter((unit) => {
      if (unit.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setData(newData);
  }

  return {
    data,
    removeItemFromLocalStorage,
  }
};
