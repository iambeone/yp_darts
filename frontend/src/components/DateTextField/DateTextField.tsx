import * as React from "react";
import "dayjs/locale/ru";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker";

const Label = styled.p`
  margin: 0 0 4px 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.17px;
  color: rgba(0, 0, 0, 0.87);
`;

export default function DateTextField({
  name,
  inputWidth,
  inputHeight,
  onChangeDate,
}: {
  name: string;
  inputWidth?: number;
  inputHeight?: number;
  onChangeDate: (value: any) => void;
}) {
  const [value, setValue] = React.useState(null);
  return (
    <div>
      <Label>{name}</Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          value={value}
          inputFormat="DD/MM/YYYY"
          onChange={(newValue) => {
            setValue(newValue);
            onChangeDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ width: inputWidth, height: inputHeight }}
              inputProps={{
                ...params.inputProps,
                placeholder: "дд/мм/гггг",
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}

DateTextField.defaultProps = {
  inputWidth: null,
  inputHeight: null,
};
