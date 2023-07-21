import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

interface Errors {
  email?: string;
  password?: string;
}

interface AddressSchema {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erros, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const currentErros: Errors = {};

    if (!email) {
      currentErros.email = "E-mail é obrigatório.";
    }
    if (!password) {
      currentErros.password = "Senha é obrigatória.";
    }

    setErrors(currentErros);

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

  const addressSchema: yup.ObjectSchema<AddressSchema> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return {
    email,
    password,
    erros,
    setEmail,
    setPassword,
    handleSubmit,
  }
};
