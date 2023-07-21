import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";

interface Data {
  apelido: string;
  local: string;
  marca: string;
  modelo: string;
  status: string;
}

interface Unit {
  id: number;
  apelido: string;
  local: string;
  marca: string;
  modelo: string;
  status: string;
}

interface AddressSchema {
  apelido: string;
  local: string;
  marca: string;
  modelo: number;
}

interface EditData {
  apelido: string;
  local: string;
  marca: string;
  modelo: string;
  status: string;
}

interface Errors {
  [key: string]: string;
}

interface EditHook {
  erros: Record<string, string>;
  statusChecked: boolean;
  open: boolean;
  isMessage: string;
  successful: boolean;
  data: EditData;
  setOpen: (open: boolean) => void;
  setStatusChecked: (checked: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClose: () => void;
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useEdit = (): EditHook => {
  const [erros, setErrors] = useState<Errors>({});
  const [statusChecked, setStatusChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMessage, setIsMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [data, setData] = useState<Data>({
    apelido: "",
    local: "",
    marca: "",
    modelo: "",
    status: "",
  });

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("unitsData") || "[]") as Unit[];
    if (storedData && typeof id === "string") {
      const parsedId = id ? parseInt(id) : undefined;
      const unit = storedData.find((item: { id: number }) => item.id === parsedId);
      if (unit) {
        try {
          setData(unit);
          setStatusChecked(unit.status === "ativo");
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      apelido: data.apelido,
      local: data.local,
      marca: data.marca,
      modelo: parseInt(data.modelo),
      status: statusChecked ? "ativo" : "inativo",
    };

    const addressSchema: yup.ObjectSchema<AddressSchema> = yup.object().shape({
      apelido: yup.string().required(),
      local: yup.string().required(),
      marca: yup.string().required(),
      modelo: yup.number().required(),
    });

    addressSchema.isValid(addressFormData).then((valid) => {
      try {
        if (valid === true && typeof id === "string") {
          const storedData = JSON.parse(localStorage.getItem("unitsData") || "[]") as Unit[];
          if (storedData) {
            const updatedData = storedData.map((item) => {
              if (item.id === parseInt(id)) {
                return {
                  ...item,
                  apelido: data.apelido,
                  local: data.local,
                  marca: data.marca,
                  modelo: parseInt(data.modelo),
                  status: addressFormData.status,
                };
              }
              return item;
            });
            localStorage.setItem("unitsData", JSON.stringify(updatedData));

            setOpen(true);
            setIsMessage("Unidade editada com sucesso!");
            setSuccessful(true);
          } else {
            setSuccessful(false);
          }
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/units");
  };

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
  };

  return {
    erros,
    statusChecked,
    open,
    isMessage,
    successful,
    data,
    setOpen,
    setStatusChecked,
    handleSubmit,
    handleClose,
    handle,
  };
};
