import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Chip, Container, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "../../utils/hooks";
import {
  setGender,
  setAge,
  applyFilters,
  setModalOpen,
  setSubjectRF,
} from "../../services/actions";
import { subjectsRF } from "../../utils/constants";
import SelectOption from "../SelectOption/SelectOption";

export default function Filters() {
  const { gender, age, buttonText } = useSelector((store) => store.filters);
  const dispatch = useDispatch();

  const container = {
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    borderRadius: 0,
    rowGap: "24px",
  };

  const box = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const title = {
    fontSize: "24px",
    lineHeight: "133.4%",
    color: "rgba(0, 0, 0, 0.87)",
  };

  const subTitle = {
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "160%",
    letterSpacing: "0.15px",
    color: "rgba(0, 0, 0, 0.87)",
  };

  const button = {
    borderRadius: "100px",
    padding: "8px 22px",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "0.46px",
  };

  const handleMaleChip = () => dispatch(setGender("male"));

  const handleFemaleChip = () => dispatch(setGender("female"));

  const handleChildrenChip = () => dispatch(setAge("children"));

  const handleTeenagersChip = () => dispatch(setAge("teenagers"));

  const handleGrownupsChip = () => dispatch(setAge("grownups"));

  const handleSelectChange = (value: { id: number; title: string } | null) =>
    dispatch(setSubjectRF(value ? value.title : ""));

  const handleApplyFilters = () => {
    dispatch(applyFilters());
    dispatch(setModalOpen(false));
  };

  return (
    <Container disableGutters maxWidth={false} fixed={false} sx={container}>
      <Typography id="modal-modal-title" sx={title}>
        Фильтры
      </Typography>
      <Box sx={box}>
        <Typography sx={subTitle}>Пол</Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Мужчины"
            color={gender === "male" ? "success" : "default"}
            onClick={handleMaleChip}
          />
          <Chip
            label="Женщины"
            color={gender === "female" ? "success" : "default"}
            onClick={handleFemaleChip}
          />
        </Stack>
      </Box>

      <Box sx={box}>
        <Typography sx={subTitle}>Возраст</Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            label="До 15 лет"
            color={age === "children" ? "success" : "default"}
            onClick={handleChildrenChip}
          />
          <Chip
            label="Юниоры"
            color={age === "teenagers" ? "success" : "default"}
            onClick={handleTeenagersChip}
          />
          <Chip
            label="Взрослые"
            color={age === "grownups" ? "success" : "default"}
            onClick={handleGrownupsChip}
          />
        </Stack>
      </Box>
      <Box sx={box}>
        <Typography sx={subTitle}>Субъект РФ</Typography>
        <SelectOption
          options={subjectsRF}
          inputWidth={326}
          inputHeight={56}
          onChangeOption={handleSelectChange}
        />
      </Box>
      <Button
        variant="outlined"
        onClick={handleApplyFilters}
        color="error"
        sx={button}
      >
        {buttonText}
      </Button>
    </Container>
  );
}
