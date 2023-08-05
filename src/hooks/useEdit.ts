import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";

interface IData {
  apelido: string;
  local: string;
  marca: string;
  modelo: string;
  status: string;
}

interface IUnit extends IData{
  id: number;
}

interface IAddressSchema {
  apelido: string;
  local: string;
  marca: string;
  modelo: number;
}

interface IErrors {
  [key: string]: string;
}

interface IEditHook {
  error: Record<string, string>;
  isChecked: boolean;
  isOpen: boolean;
  message: string;
  isSuccessful: boolean;
  data: IData;
  setOpen: (isOpen: boolean) => void;
  setChecked: (isChecked: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleClose: () => void;
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useEdit = (): IEditHook => {
  const [error, setError] = useState<IErrors>({});
  const [isChecked, setChecked] = useState(false);
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

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("unitsData") || "[]") as IUnit[];
    if (storedData && typeof id === "string") {
      const parsedId = id ? parseInt(id) : undefined;
      const unit = storedData.find((item: { id: number }) => item.id === parsedId);
      if (unit) {
        try {
          setData(unit);
          setChecked(unit.status === "ativo");
        } catch (erro) {
          console.error("Error parsing JSON:", erro);
        }
      }
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      apelido: data.apelido,
      local: data.local,
      marca: data.marca,
      modelo: parseInt(data.modelo),
      status: isChecked ? "ativo" : "inativo",
    };

    const addressSchema: yup.ObjectSchema<IAddressSchema> = yup.object().shape({
      apelido: yup.string().required(),
      local: yup.string().required(),
      marca: yup.string().required(),
      modelo: yup.number().required(),
    });

    addressSchema.isValid(addressFormData).then((valid) => {
      try {
        if (valid === true && typeof id === "string") {
          const storedData = JSON.parse(localStorage.getItem("unitsData") || "[]") as IUnit[];
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
            setMessage("Unidade editada com sucesso!");
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
    error,
    isChecked,
    isOpen,
    message,
    isSuccessful,
    data,
    setOpen,
    setChecked,
    handleSubmit,
    handleClose,
    handle,
  };
};
