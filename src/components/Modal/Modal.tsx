import { FC } from "react";
import {
  Modal as Modals,
  Box,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

interface IModalProps {
  isOpen: boolean;
  message: string;
  isSuccessful: boolean;
  setOpen: (isOpen: boolean) => void;
  handleClose: () => void;
}

const Modal: FC<IModalProps> = ({
  isOpen,
  message,
  isSuccessful,
  setOpen,
  handleClose,
}) => {
  const BoxStyled = {
    position: "absolute",
    top: "8%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
  };

  return (
    <Modals
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={BoxStyled}>
        <Collapse in={isOpen}>
          {isSuccessful ? (
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
              <Typography sx={{ fontWeight: 700 }}>{message}</Typography>
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
              <Typography sx={{ fontWeight: 700 }}>{message}</Typography>
            </Alert>
          )}
        </Collapse>
      </Box>
    </Modals>
  );
};

export default Modal;
