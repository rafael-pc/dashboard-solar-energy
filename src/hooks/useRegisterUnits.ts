import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

interface IData {
  apelido: string;
  local: string;
  marca: string;
  modelo: string;
  status: string;
}
interface IErrors {
  [key: string]: string;
}

interface IRegisterUnitsHook {
  error: Record<string, string>;
  statusChecked: boolean;
  isOpen: boolean;
  message: string;
  isSuccessful: boolean;
  setOpen: (isOpen: boolean) => void;
  setStatusChecked: (checked: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClose: () => void;
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useRegisterUnits = (): IRegisterUnitsHook => {
  const [error, setError] = useState<IErrors>({});
  const [statusChecked, setStatusChecked] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccessful, setSuccessful] = useState(false);
  const [data, setData] = useState<IData>({
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    status: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let idCounterUnit: number = parseInt(localStorage.getItem("idCounterUnit") || "6");

    const currentErros: IErrors = {};

    if (!data.apelido) {
      currentErros.apelido = "Campo apelido é obrigatório.";
    }
    if (!data.local) {
      currentErros.local = "Campo local é obrigatório.";
    }
    if (!data.marca) {
      currentErros.marca = "Campo marca é obrigatório.";
    }
    if (!data.modelo) {
      currentErros.modelo = "Campo modelo é obrigatório.";
    }
    setError(currentErros);

    const addressFormData = {
      id: idCounterUnit++,
      apelido: data.apelido,
      local: data.local,
      marca: data.marca,
      modelo: parseInt(data.modelo),
      status: statusChecked ? "ativo" : "inativo",
    };

    const addressSchema = yup.object().shape({
      apelido: yup.string().required(),
      local: yup.string().required(),
      marca: yup.string().required(),
      modelo: yup.number().required(),
    });

    addressSchema.isValid(addressFormData).then((valid) => {
      try {
        if (valid === true) {
          let items = [];

          const storedItems = localStorage.getItem("unitsData");
          if (storedItems) {
            items = JSON.parse(storedItems);
          }
          const newItem = addressFormData;
          items.push(newItem);

          localStorage.setItem("unitsData", JSON.stringify(items));
          localStorage.setItem("idCounterUnit", idCounterUnit.toString());

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
    history("/units");
  }

  const history = useNavigate();

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData: {
      [key: string]: string;
      apelido: string;
      local: string;
      marca: string;
      modelo: string;
      status: string;
    } = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return {
    error,
    statusChecked,
    isOpen,
    message,
    isSuccessful,
    setOpen,
    setStatusChecked,
    handleSubmit,
    handleClose,
    handle
  }
}

