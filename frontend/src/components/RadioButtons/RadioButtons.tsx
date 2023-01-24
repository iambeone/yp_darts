import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { RadioButtonsContainer, Label } from "./RadioButtonsStyles";

export default function RadioButtons({
  name,
  values,
}: {
  name: string;
  values: string[];
}) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const StyledButtonsGroup = styled(ToggleButtonGroup)(() => ({
    gap: "8px",
    "& .MuiToggleButtonGroup-grouped:not(:last-of-type)": {
      borderRadius: "16px",
    },
    "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
      borderRadius: "16px",
    },
  }));

  const StyledButton = styled(ToggleButton)(() => ({
    border: "none",
    padding: "7px 10px",
    background: "rgba(0, 0, 0, 0.08)",
    fontSize: "13px",
    lineHeight: "18px",
    color: "rgba(0, 0, 0, 0.87)",
    fontWeight: "400",
    "&.Mui-selected": {
      backgroundColor: "#2E7D32",
      color: "#FFFFFF",
    },
    "&.Mui-selected:hover": {
      opacity: "0.8",
      color: "#FFFFFF",
      backgroundColor: "#2E7D32",
    },
  }));

  return (
    <RadioButtonsContainer>
      <Label>{name}</Label>
      <StyledButtonsGroup
        value={value}
        exclusive
        onChange={handleChange}
        aria-label={name}
      >
        {values.map((item) => {
          return (
            <StyledButton key={item} value={item} aria-label={item}>
              {item}
            </StyledButton>
          );
        })}
      </StyledButtonsGroup>
    </RadioButtonsContainer>
  );
}
