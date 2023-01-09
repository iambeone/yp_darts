import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GroupName, Requirement } from "./RadioButtonStyles";

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
}: {
  name: string;
  values: string[];
  isRequired?: boolean;
}) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <GroupName id="gender-radio-buttons-group" focused color="info">
          {name} {isRequired && <Requirement>*</Requirement>}
        </GroupName>
        <RadioGroup
          aria-labelledby="gender-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {values.map((element) => {
            return (
              <FormControlLabel
                value={element}
                control={
                  <Radio
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
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
}

RadioOption.defaultProps = {
  isRequired: false,
};

export default RadioOption;
