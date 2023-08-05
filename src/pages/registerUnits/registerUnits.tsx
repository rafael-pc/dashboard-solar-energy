import { Header, Menu, Input, Button, Sidebar } from "../../components";
import { useRegisterUnits } from "../../hooks/useRegisterUnits";
import * as S from "./registerUnits.styled";
import { FiAlertCircle } from "react-icons/fi";

import { Modal } from "../../components";

const RegisterUnits = () => {
  const {
    error,
    statusChecked,
    isOpen,
    message,
    isSuccessful,
    setOpen,
    setStatusChecked,
    handleSubmit,
    handleClose,
    handle,
  } = useRegisterUnits();

  return (
    <S.Container>
      <Sidebar />
      <Menu />
      <S.Content>
        <Header title="Unidades"></Header>
        <S.FormContainer>
          <h3>Cadastro de Unidade Geradora</h3>
          <S.Form onSubmit={handleSubmit}>
            <Input
              id="apelido"
              title="apelido"
              label="Apelido"
              placeholder="Digite o apelido"
              type="text"
              onChange={(e) => handle(e)}
              className={error.apelido ? "error" : ""}
            />
            {error.apelido && (
              <p>
                <FiAlertCircle className="icon-alert" />
                {error.apelido}
              </p>
            )}
            <Input
              id="local"
              title="local"
              label="Local"
              placeholder="Digite o local"
              type="text"
              onChange={(e) => handle(e)}
              className={error.local ? "error" : ""}
            />
            {error.local && (
              <p>
                <FiAlertCircle className="icon-alert" />
                {error.local}
              </p>
            )}
            <Input
              id="marca"
              title="marca"
              label="Marca"
              placeholder="Digite a marca"
              type="text"
              onChange={(e) => handle(e)}
              className={error.marca ? "error" : ""}
            />
            {error.marca && (
              <p>
                <FiAlertCircle className="icon-alert" />
                {error.marca}
              </p>
            )}
            <Input
              id="modelo"
              title="modelo"
              label="Modelo"
              placeholder="Digite o modelo"
              type="text"
              onChange={(e) => handle(e)}
              className={error.modelo ? "error" : ""}
            />
            {error.modelo && (
              <p>
                <FiAlertCircle className="icon-alert" />
                {error.modelo}
              </p>
            )}
            <label>
              <input
                type="checkbox"
                id="status"
                checked={statusChecked}
                onChange={(e) => setStatusChecked(e.target.checked)}
              />
              ativo
            </label>
            <Button className="button">Salvar</Button>
          </S.Form>
        </S.FormContainer>
        {message && (
          <Modal
            isOpen={isOpen}
            message={message}
            isSuccessful={isSuccessful}
            setOpen={setOpen}
            handleClose={handleClose}
          />
        )}
      </S.Content>
    </S.Container>
  );
};

export default RegisterUnits;
