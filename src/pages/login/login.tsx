import { FaRegEnvelope, FaLock } from "react-icons/fa";
import { Button, InputLogin } from "../../components";
import * as S from "./login.styled";

import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { email, password, erros, handleSubmit, setEmail, setPassword } = useLogin();

  return (
    <S.Container>
      <div className="image-content">
        <S.Image />
      </div>
      <S.Content>
        <div className="login-content">
          <S.Logo />
          <h2>Seja bem vindo</h2>
          <S.Form onSubmit={handleSubmit}>
            <InputLogin
              icon={<FaRegEnvelope className="icon" />}
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              errorMessage={erros.email}
            ></InputLogin>

            <InputLogin
              icon={<FaLock className="icon" />}
              type="password"
              value={password}
              placeholder="Senha"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              errorMessage={erros.password}
            ></InputLogin>

            <Button type="submit" width={"100%"}>
              Entrar
            </Button>
          </S.Form>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default Login;
