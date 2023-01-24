import React from "react";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

type DialogWindowType = "accept" | "success" | "error";

interface DialogWindowProps {
  open: boolean;
  type: DialogWindowType;
  title: string;
  contentText?: string;
  handleClose: () => void;
  children: React.ReactNode;
}

const defaultProps: Partial<DialogWindowProps> = {
  contentText: "",
};

function DialogWindow({
  open,
  type,
  title,
  contentText,
  handleClose,
  children,
}: DialogWindowProps) {
  const getPaperStyle = () => {
    if (type === "success")
      return {
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),#2e7d32`,
      };
    if (type === "error")
      return {
        background: `linear-gradient(0deg,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.9)),#d32f2f`,
      };
    if (type === "accept") return { backgroundColor: "#ffffff" };
    return {};
  };

  const getTitleStyle = () => {
    if (type === "success") {
      return { color: "#2e7d32" };
    }
    if (type === "error") {
      return { color: "#d32f2f" };
    }
    if (type === "accept") {
      return { color: "rgba(0, 0, 0, 0.87)" };
    }
    return {};
  };

  const getIcon = () => {
    if (type === "success") {
      return (
        <Icon color="success" sx={{ fontSize: 32 }}>
          check
        </Icon>
      );
    }
    if (type === "error") {
      return <Icon sx={{ fontSize: 32, color: red[700] }}>info_outline</Icon>;
    }
    if (type === "accept") {
      return <Icon sx={{ fontSize: 32 }}>info_outline</Icon>;
    }
    return "";
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      PaperProps={{
        sx: {
          ...getPaperStyle(),
          minWidth: {
            xs: 320,
            sm: 500,
          },
        },
      }}
    >
      <DialogTitle id="dialog-title" sx={getTitleStyle()}>
        <Stack direction="row" alignItems="flex-start" spacing={2}>
          {getIcon()}
          <Typography variant="h6">{title}</Typography>
        </Stack>
      </DialogTitle>
      {contentText && (
        <DialogContent sx={{ px: 3, py: 1 }}>
          <DialogContentText id="dialog-description" sx={{ color: "#000" }}>
            {contentText}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="flex-end"
          justifyContent="flex-end"
          spacing={1}
        >
          {children}
        </Stack>
      </DialogActions>
    </Dialog>
  );
}

DialogWindow.defaultProps = defaultProps;

export default DialogWindow;
