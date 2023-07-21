import { Header, Menu, Input, Button, Sidebar } from "../../components";
import * as S from "./registerUnits.styled";
import { Modal, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import { useRegisterUnits } from "../../hooks/useRegisterUnits";

const RegisterUnits = () => {
  const {
    erros,
    statusChecked,
    open,
    message,
    successful,
    setOpen,
    setStatusChecked,
    handleSubmit,
    handleClose,
    handle,
  } = useRegisterUnits();

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
              errorMessage={erros.apelido}
            ></Input>
            <Input
              id="local"
              title="local"
              label="Local"
              placeholder="Digite o local"
              type="text"
              onChange={(e) => handle(e)}
              errorMessage={erros.local}
            ></Input>
            <Input
              id="marca"
              title="marca"
              label="Marca"
              placeholder="Digite a marca"
              type="text"
              onChange={(e) => handle(e)}
              errorMessage={erros.marca}
            ></Input>
            <Input
              id="modelo"
              title="modelo"
              label="Modelo"
              style={{ width: "55%" }}
              placeholder="Digite o modelo"
              type="text"
              onChange={(e) => handle(e)}
              errorMessage={erros.modelo}
            ></Input>

            <label>
              <input
                type="checkbox"
                id="status"
                checked={statusChecked}
                onChange={(e) => setStatusChecked(e.target.checked)}
              />
              ativo
            </label>
            <Button type="submit" className="button" width={"100%"}>
              Salvar
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

export default RegisterUnits;
