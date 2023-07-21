import { Menu, Header, Input, Select, Button, Sidebar } from "../../components";
import { Modal, Box, Collapse, IconButton } from "@mui/material";
import { useRegisterMonth } from "../../hooks/useRegisterMonth";
import * as S from "./registerMonth.styled";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

import { usePlaceholderMonthData } from "../../hooks/usePlaceholderMonthData";

usePlaceholderMonthData();

const RegisterMonth = () => {
  const {
    erros,
    units,
    open,
    message,
    successful,
    setOpen,
    handleSubmit,
    handleClose,
    handle,
  } = useRegisterMonth();

  const BoxStyled = {
    position: "absolute",
    top: "8%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
  };

  return (
    <S.Container>
      <Sidebar />
      <Menu />
      <S.Content>
        <Header
          title="Lançamento de geração mensal"
        ></Header>
        <S.FormContainer>
          <h3>Unidade Geradora</h3>
          <S.Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Select
              title="unidade"
              className="select"
              defaultValue=""
              onChange={(e) => handle(e)}
              errorMessage={erros.unidade}
              id="unidade"
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

            <Input
              id="date"
              title="date"
              label="Mês/ano"
              type="month"
              className="date"
              onChange={(e) => handle(e)}
              errorMessage={erros.date}
            ></Input>

            <Input
              id="energia"
              title="energia"
              label="Total Kw gerado"
              placeholder="Digite o total Kw gerado"
              type="text"
              className="energia"
              onChange={(e) => handle(e)}
              errorMessage={erros.energia}
            ></Input>

            <Button type="submit" className="button" width={"100%"}>
              Cadastrar
            </Button>
          </S.Form>
        </S.FormContainer>
        {message && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={BoxStyled}>
              <Collapse in={open}>
                {successful ? (
                  <Alert
                    severity="success"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={handleClose}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    {message}
                  </Alert>
                ) : (
                  <Alert
                    severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    {message}
                  </Alert>
                )}
              </Collapse>
            </Box>
          </Modal>
        )}
      </S.Content>
    </S.Container>
  );
};

export default RegisterMonth;

