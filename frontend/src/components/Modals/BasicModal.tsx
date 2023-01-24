import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Icon from "@mui/material/Icon";
import { useSelector, useDispatch } from "../../utils/hooks";
import { setModalOpen } from "../../services/actions";

const box = {
  boxSizing: "border-box",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "360px",
  bgcolor: "background.paper",
  border: "1px solid #A7A2AC",
  outline: "none",
  borderRadius: "8px",
  p: 2,
};

const closeIcon = {
  cursor: "pointer",
  position: "absolute",
  top: "25px",
  right: "25px",
};

interface BasicModalProps {
  children: React.ReactNode;
}

export default function BasicModal({ children }: BasicModalProps) {
  const { modalOpen } = useSelector((store) => store.common);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setModalOpen(false));

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={box}>
        {children}
        <Icon onClick={handleClose} color="success" sx={closeIcon}>
          close
        </Icon>
      </Box>
    </Modal>
  );
}
