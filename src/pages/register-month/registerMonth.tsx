import { Menu, Header, Input, Select, Button, Sidebar } from "../../components";
import { useRegisterMonth } from "../../hooks/useRegisterMonth";
import { FiAlertCircle } from "react-icons/fi";
import * as S from "./registerMonth.styled";

import { Modal } from "../../components";

const RegisterMonth = () => {
  const {
    error,
    units,
    isOpen,
    message,
    isSuccessful,
    setOpen,
    handleSubmit,
    handleClose,
    handle,
  } = useRegisterMonth();

  return (
    <S.Container>
      <Sidebar />
      <Menu />
      <S.Content>
        <Header title="Lançamento de geração mensal" />
        <S.FormContainer>
          <h3>Unidade Geradora</h3>
          <S.Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Select
              id="unidade"
              title="unidade"
              defaultValue=""
              onChange={(e) => handle(e)}
              className={error.unidade ? "error" : ""}
            >
              <option value="" disabled>
                Unidade
              </option>
              {Array.isArray(units) ? (
                units.map((unidade, index) => {
                  return (
                    <option key={index} value={unidade.id}>
                      {unidade.apelido}
                    </option>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={2}>Nenhum dado encontrado.</td>
                </tr>
              )}
            </Select>
            {error.unidade && (
              <p>
                <FiAlertCircle className="icon-alert" />
                {error.unidade}
              </p>
            )}
            <Input
              id="date"
              title="date"
              label="Mês/ano"
              type="month"
              onChange={(e) => handle(e)}
              className={error.date ? "error" : ""}
            />
            {error.date && (
              <p>
                <FiAlertCircle className="icon-alert" />
                {error.date}
              </p>
            )}
            <Input
              id="energia"
              title="energia"
              label="Total Kw gerado"
              type="text"
              placeholder="Digite o total Kw gerado"
              onChange={(e) => handle(e)}
              className={error.energia ? "error" : ""}
            />
            {error.energia && (
              <p>
                <FiAlertCircle className="icon-alert" />
                {error.energia}
              </p>
            )}
            <Button type="submit" className="button">
              Cadastrar
            </Button>
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

export default RegisterMonth;
