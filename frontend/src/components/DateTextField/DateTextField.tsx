import React from "react";
import { FormControl, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarPickerView } from "@mui/x-date-pickers/internals/models";
import { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import styled from "styled-components";

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

type DateTextFieldType = "year" | "month" | "day";

interface DateTextFieldProps {
  value: Dayjs | null;
  onChangeHandler: (newValue: Dayjs | null) => void;
  labelText: string;
  type: DateTextFieldType;
  inputWidth: number;
  inputHeight: number;
}
export default function DateTextField({
  value,
  onChangeHandler,
  labelText,
  type,
  inputWidth,
  inputHeight,
}: DateTextFieldProps) {
  const getView = (): CalendarPickerView[] | undefined => {
    switch (type) {
      case "year":
        return ["year"];
      case "month":
        return ["year", "month"];
      case "day":
        return ["year", "month", "day"];
      default:
        return undefined;
    }
  };

  const getInputFormat = () => {
    switch (type) {
      case "year":
        return "YYYY";
      case "month":
        return "MM/YYYY";
      case "day":
        return "DD/MM/YYYY";
      default:
        return undefined;
    }
  };

  const getPlaceholder = () => {
    switch (type) {
      case "year":
        return "гггг";
      case "month":
        return "мм/гггг";
      case "day":
        return "дд/мм/гггг";
      default:
        return undefined;
    }
  };

  return (
    <FormControl>
      <Label>{labelText}</Label>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DatePicker
          value={value}
          onChange={(newValue) => onChangeHandler(newValue)}
          views={getView()}
          inputFormat={getInputFormat()}
          renderInput={(params) => (
            <TextField
              id="date-input"
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: getPlaceholder(),
              }}
              sx={{ width: inputWidth, height: inputHeight }}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
