/* eslint-disable react/require-default-props */
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
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
const Span = styled.span`
  color: red;
`;

export default function DateTextField({
  name,
  view,
  inputWidth,
  inputHeight,
  value = dayjs(),
  onChange,
  onBlur,
  isRequired,
}: {
  name: string;
  view?: CalendarPickerView[];
  inputWidth?: number;
  inputHeight?: number;
  value?: Dayjs | null;
  onChange?: any;
  onBlur?: any;
  isRequired?: boolean;
}) {
  return (
    <div>
      <Label>
        {name} {isRequired ? <Span> *</Span> : <> </>}
      </Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disableFuture
          openTo="year"
          views={view || ["year", "month", "day"] || undefined}
          inputFormat={view ? "YYYY" : "DD/MM/YYYY"}
          value={value}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              onBlur={onBlur}
              inputProps={{ ...params.inputProps, placeholder: "дд/мм/гггг" }}
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
