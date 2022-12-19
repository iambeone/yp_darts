import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./Radio-Option.module.css";

const theme = createTheme({
  palette: {
    info: {
      main: "#212121",
    },
  },
});

function RadioOption() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <FormLabel
          id="gender-radio-buttons-group"
          className={styles.radioGruopName}
          focused
          color="info"
        >
          Пол <span className={styles.requirement}>*</span>
        </FormLabel>
        <RadioGroup
          aria-labelledby="gender-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="male"
            control={
              <Radio
                color="success"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              />
            }
            label="Мужчина"
          />
          <FormControlLabel
            value="female"
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
            label="Женщина"
          />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
}

export default RadioOption;
