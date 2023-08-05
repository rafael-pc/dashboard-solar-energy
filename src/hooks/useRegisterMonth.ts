import { useEffect, useState } from "react";
import * as yup from "yup";

interface IData {
  unidade: string;
  date: string;
  energia: string;
}
interface IErrors {
  [key: string]: string;
}

interface IUnit {
  id: number;
  [key: string]: string | number;
}

interface IRegisterMonthHook {
  error: Record<string, string>;
  units: IUnit[];
  isOpen: boolean;
  message: string;
  isSuccessful: boolean;
  setOpen: (open: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClose: () => void;
  handle: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const useRegisterMonth = (): IRegisterMonthHook => {
  const [error, setErrors] = useState<IErrors>({});
  const [units, setUnits] = useState<IUnit[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccessful, setSuccessful] = useState(false);
  const [data, setData] = useState<IData>({
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

    const currentErros: IErrors = {};

    if (!data.unidade) {
      currentErros.unidade = "Campo unidade é obrigatório.";
    }
    if (!data.date) {
      currentErros.date = "Campo data é obrigatório.";
    }
    if (!data.energia) {
      currentErros.energia = "Campo energia é obrigatório.";
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
    error,
    units,
    isOpen,
    message,
    isSuccessful,
    setOpen,
    handleSubmit,
    handleClose,
    handle
  }
}
