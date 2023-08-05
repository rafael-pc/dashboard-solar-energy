import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

interface IError {
  email?: string;
  password?: string;
}

interface IAddressSchema {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<IError>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentErros: IError = {};

    if (!email) {
      currentErros.email = "Campo email é obrigatório.";
    }
    if (!password) {
      currentErros.password = "Campo senha é obrigatório.";
    }

    setError(currentErros);

    const addressFormData = {
      email: email,
      password: password,
    };

    addressSchema.isValid(addressFormData).then((valid) => {
      try {
        if (valid === true) {
          history("/dashboard");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  }

  const history = useNavigate();

  const addressSchema: yup.ObjectSchema<IAddressSchema> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleSubmit,
  }
};
