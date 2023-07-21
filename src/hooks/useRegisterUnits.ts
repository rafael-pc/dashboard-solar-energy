import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

interface Errors {
  apelido?: string;
  local?: string;
  marca?: string;
  modelo?: string;
}

interface Data {
  apelido: string;
  local: string;
  marca: string;
  modelo: string;
  status: string;
}

export const useRegisterUnits = () => {
  const [erros, setErrors] = useState<Errors>({});
  const [statusChecked, setStatusChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [data, setData] = useState<Data>({
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    status: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //let idCounterUnit = localStorage.getItem("idCounterUnit") || 6;
    let idCounterUnit: number = parseInt(localStorage.getItem("idCounterUnit") || "6");

    const currentErros: Errors = {};

    if (!data.apelido) {
      currentErros.apelido = "Apelido é obrigatório.";
    }
    if (!data.local) {
      currentErros.local = "Local é obrigatório.";
    }
    if (!data.marca) {
      currentErros.marca = "Marca é obrigatória.";
    }
    if (!data.modelo) {
      currentErros.modelo = "Modelo é obrigatório.";
    }
    setErrors(currentErros);

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
    erros,
    statusChecked,
    open,
    message,
    successful,
    setOpen,
    setStatusChecked,
    handleSubmit,
    handleClose,
    handle
  }
}

