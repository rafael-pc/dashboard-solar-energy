import { useEffect, useState } from "react";
import { FaRegEnvelope, FaLock } from "react-icons/fa";
import { Button, InputLogin } from "../../components";
import { FiAlertCircle } from "react-icons/fi";
import * as S from "./login.styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { email, password, error, handleSubmit, setEmail, setPassword } =
    useLogin();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <S.Container>
      <div className="image-content">
        {isLoading ? <Skeleton width={"100%"} height={"100vh"} /> : <S.Image />}
      </div>
      <S.Content>
        <div className="login-content">
          {isLoading ? (
            <Skeleton
              height={250}
              width={250}
              borderRadius={"0.6rem"}
              className="skeleton-logo"
            />
          ) : (
            <S.Logo />
          )}
          {isLoading ? (
            <Skeleton
              height={40}
              width={200}
              borderRadius={"0.6rem"}
              className="skeleton-title"
            />
          ) : (
            <h2>Seja bem vindo</h2>
          )}
          <S.Form onSubmit={handleSubmit}>
            {isLoading ? (
              <Skeleton
                count={2}
                height={40}
                width={300}
                borderRadius={"0.6rem"}
              />
            ) : (
              <>
                <InputLogin
                  icon={<FaRegEnvelope className="icon" />}
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className={error.email ? "error" : ""}
                />
                {error.email && (
                  <p>
                    <FiAlertCircle className="icon-alert" />
                    {error.email}
                  </p>
                )}
                <InputLogin
                  icon={<FaLock className="icon" />}
                  type="password"
                  value={password}
                  placeholder="Senha"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className={error.password ? "error" : ""}
                />
                {error.password && (
                  <p>
                    <FiAlertCircle className="icon-alert" />
                    {error.password}
                  </p>
                )}
              </>
            )}
            {isLoading ? (
              <Skeleton
                height={40}
                width={300}
                borderRadius={"0.6rem"}
                className="skeleton-button"
              />
            ) : (
              <Button className="button" disabled={isLoading}>
                Entrar
              </Button>
            )}
          </S.Form>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default Login;
