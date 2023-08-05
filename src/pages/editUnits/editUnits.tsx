import { Header, Menu, Input, Button, Sidebar } from "../../components";
import { useEdit } from "../../hooks/useEdit";
import { FiAlertCircle } from "react-icons/fi";
import * as S from "./editUnits.styled";

import { Modal } from "../../components";

const EditUnits = () => {
  const {
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
  } = useEdit();

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
              type="text"
              value={data.apelido}
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
              type="text"
              value={data.local}
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
              type="text"
              value={data.marca}
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
              type="text"
              style={{ width: "50%" }}
              value={data.modelo}
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
                checked={isChecked}
                onChange={(e) => setChecked(e.target.checked)}
                type="checkbox"
                id="status"
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

export default EditUnits;
