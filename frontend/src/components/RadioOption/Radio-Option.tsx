/* eslint-disable react/no-array-index-key */
/* eslint-disable react/require-default-props */
import React from "react";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    info: {
      main: "#212121",
    },
  },
});

const RadioContainer = styled(RadioGroup)`
  margin-left: 15px;
`;
const Span = styled.span`
  color: red;
`;

function RadioOption({
  name = "Пол",
  values = ["Мужчина", "Женщина"],
  isRequired = true,
  onChange,
}: {
  name?: string;
  values?: string[];
  isRequired?: boolean;
  onChange?: any;
}) {
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel
          shrink
          id="gender-radio-buttons-group"
          focused
          color="info"
          sx={{ top: -14, left: -14 }}
        >
          {name} {isRequired ? <Span>*</Span> : <> </>}
        </InputLabel>
        <RadioContainer
          aria-labelledby="gender-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={onChange || handleChange}
        >
          {values.map((element, index) => {
            return (
              <FormControlLabel
                value={element}
                key={`${index}-radio-element`}
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
        </RadioContainer>
      </FormControl>
    </ThemeProvider>
  );
}

export default RadioOption;
