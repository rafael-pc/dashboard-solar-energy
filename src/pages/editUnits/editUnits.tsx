import { Header, Menu, Input, Button, Sidebar } from "../../components";
import { Modal, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import * as S from "./editUnits.styled";

import { useEdit } from "../../hooks/useEdit";

const EditUnits = () => {
  const {
    erros,
    statusChecked,
    open,
    isMessage,
    successful,
    data,
    setOpen,
    setStatusChecked,
    handleSubmit,
    handleClose,
    handle,
  } = useEdit();

  const BoxStyled = {
    position: "absolute",
    top: "8%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
  };

  return (
    <S.Container>
      <div className="sidebar">
        <Sidebar />
      </div>
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
              errorMessage={erros.apelido}
            ></Input>

            <Input
              id="local"
              title="local"
              label="Local"
              type="text"
              value={data.local}
              onChange={(e) => handle(e)}
              errorMessage={erros.local}
            ></Input>

            <Input
              id="marca"
              title="marca"
              label="Marca"
              type="text"
              value={data.marca}
              onChange={(e) => handle(e)}
              errorMessage={erros.marca}
            ></Input>

            <Input
              id="modelo"
              title="modelo"
              label="Modelo"
              type="text"
              style={{ width: "50%" }}
              value={data.modelo}
              onChange={(e) => handle(e)}
              errorMessage={erros.modelo}
            ></Input>

            <label>
              <input
                checked={statusChecked}
                onChange={(e) => setStatusChecked(e.target.checked)}
                type="checkbox"
                id="status"
              />
              ativo
            </label>
            
            <Button type="submit" className="button" width={"100%"}>
              Salvar
            </Button>
          </S.Form>
        </S.FormContainer>
        {isMessage && (
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
                    {isMessage}
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
                    {isMessage}
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

export default EditUnits;
