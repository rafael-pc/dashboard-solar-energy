import { useEffect, useState } from "react";
import * as yup from "yup";

interface Errors {
  unidade?: string;
  date?: string;
  energia?: string;
}

interface Data {
  unidade: string;
  date: string;
  energia: string;
}

interface Unit {
  id: number;
  [key: string]: string | number;
}

export const useRegisterMonth = () => {
  const [erros, setErrors] = useState<Errors>({});
  const [units, setUnits] = useState<Unit[]>([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [data, setData] = useState<Data>({
    unidade: "",
    date: "",
    energia: "",
  });

  useEffect(() => {
    try {
      const getData = localStorage.getItem("unitsData") || "[]";
      if (getData) {
        setUnits(JSON.parse(getData));
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let idCounterUnit: number = parseInt(localStorage.getItem("idCounterUnitMonthly") || "25");

    const currentErros: Errors = {};

    if (!data.unidade) {
      currentErros.unidade = "Unidade é obrigatória.";
    }
    if (!data.date) {
      currentErros.date = "Data é obrigatória.";
    }
    if (!data.energia) {
      currentErros.energia = "Energia é obrigatória.";
    }

    setErrors(currentErros);

    const addressFormData = {
      id: idCounterUnit++,
      unidade: data.unidade,
      date: data.date,
      energia: parseInt(data.energia),
    };

    const addressSchema = yup.object().shape({
      unidade: yup.string().required(),
      date: yup.date().required(),
      energia: yup.number().required(),
    });

    addressSchema.isValid(addressFormData).then((valid) => {
      try {
        if (valid === true) {
          let items = [];

          const storedItems = localStorage.getItem("monthlyData");
          if (storedItems) {
            items = JSON.parse(storedItems);
          }
          const newItem = addressFormData;
          items.push(newItem);

          localStorage.setItem("monthlyData", JSON.stringify(items));
          localStorage.setItem("idCounterUnitMonthly", idCounterUnit.toString());

          const unidadeElement = document.getElementById("unidade") as HTMLInputElement;
          const dateElement = document.getElementById("date") as HTMLInputElement;
          const energiaElement = document.getElementById("energia") as HTMLInputElement;

          if (unidadeElement && dateElement && energiaElement) {
            unidadeElement.value = "";
            dateElement.value = "";
            energiaElement.value = "";
          }

          setOpen(true);
          setMessage("Unidade cadastrada com sucesso!");
          setSuccessful(true);
        } else {
          setSuccessful(false);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newData: {
      [key: string]: string;
      unidade: string;
      date: string;
      energia: string;
    } = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return {
    erros,
    units,
    open,
    message,
    successful,
    setOpen,
    handleSubmit,
    handleClose,
    handle
  }
}
