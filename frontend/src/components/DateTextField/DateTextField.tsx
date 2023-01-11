import * as React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarPickerView } from "@mui/x-date-pickers/internals/models";

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
  view,
  inputWidth,
  inputHeight,
}: {
  name: string;
  view?: CalendarPickerView[];
  inputWidth?: number;
  inputHeight?: number;
}) {
  const [value, setValue] = React.useState(dayjs());
  return (
    <div>
      <Label>{name}</Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={view || undefined}
          inputFormat={view ? "YYYY" : "DD/MM/YYYY"}
          value={value}
          onChange={(newValue) => setValue(dayjs(newValue))}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ width: inputWidth, height: inputHeight }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}

DateTextField.defaultProps = {
  view: null,
  inputWidth: null,
  inputHeight: null,
};
