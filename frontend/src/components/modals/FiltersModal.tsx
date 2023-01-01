import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Icon from "@mui/material/Icon";
import { useSelector, useDispatch } from "../../utils/hooks";
import { setModalOpen } from "../../services/actions";

const box = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const closeIcon = {
  cursor: "pointer",
  position: "absolute",
  top: "25px",
  right: "25px",
};

export default function FiltersModal() {
  const { filtersModalOpen } = useSelector((store) => store.common);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setModalOpen(false));

  return (
    <Modal
      open={filtersModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={box}>
        <Icon onClick={handleClose} color="success" sx={closeIcon}>
          close
        </Icon>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
}
