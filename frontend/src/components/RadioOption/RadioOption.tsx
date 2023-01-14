/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GroupName, Requirement, GroupRadio } from "./RadioButtonStyles";

const theme = createTheme({
  palette: {
    info: {
      main: "#212121",
    },
  },
});

function RadioOption({
  name = "Пол",
  values = ["Мужчина", "Женщина"],
  isRequired = true,
  onChange,
  value = "female",
  onBlur,
  error = false,
  helperText = "",
  isDisabled = false,
}: {
  name: string;
  values: string[];
  isRequired?: boolean;
  onChange?: any;
  value?: string;
  onBlur?: any;
  error?: boolean;
  helperText?: string;
  isDisabled?: boolean;
}) {
  return (
    <ThemeProvider theme={theme}>
      <FormControl error={error}>
        <GroupName id="gender-radio-buttons-group" focused color="info">
          {name} {isRequired && <Requirement>*</Requirement>}
        </GroupName>
        <GroupRadio
          aria-labelledby="gender-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          {values.map((element, index) => {
            return (
              <FormControlLabel
                value={element}
                key={`-${index}-radio-option`}
                control={
                  <Radio
                    disabled={isDisabled}
                    color="success"
                    sx={{
                      "&.MuiTypography-root": {
                        letterSpacing: "0.15px",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                      },
                    }}
                  />
                }
                label={element}
              />
            );
          })}
        </GroupRadio>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </ThemeProvider>
  );
}

RadioOption.defaultProps = {
  isRequired: false,
};

export default RadioOption;
