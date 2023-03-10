import React from "react";
import { FormControl, TextField, FormHelperText } from "@mui/material";
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
const Span = styled.span`
  color: red;
`;

type DateTextFieldType = "year" | "month" | "day";

interface DateTextFieldProps {
  value: Dayjs | null;
  onChangeHandler: (newValue: Dayjs | null) => void;
  labelText: string;
  type: DateTextFieldType;
  inputWidth?: number;
  inputHeight?: number;
  onBlur?: any;
  isRequired?: boolean;
  disableFuture?: boolean;
  openTo?: CalendarPickerView | undefined;
  error?: boolean;
  helperText?: string;
  sx?: any;
  isDisabled?: boolean;
}
export default function DateTextField({
  value,
  onChangeHandler,
  labelText,
  type,
  inputWidth,
  inputHeight,
  onBlur,
  isRequired = false,
  disableFuture = false,
  openTo = "year",
  error,
  helperText,
  sx,
  isDisabled = false,
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
        return "????????";
      case "month":
        return "????/????????";
      case "day":
        return "????/????/????????";
      default:
        return undefined;
    }
  };

  return (
    <FormControl sx={sx}>
      <Label>
        {labelText} {isRequired ? <Span> *</Span> : <> </>}
      </Label>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DatePicker
          disabled={isDisabled}
          disableFuture={disableFuture}
          openTo={openTo}
          value={value}
          onChange={(newValue) => onChangeHandler(newValue)}
          views={getView()}
          inputFormat={getInputFormat()}
          renderInput={(params) => (
            <TextField
              id="date-input"
              {...params}
              onBlur={onBlur}
              inputProps={{
                ...params.inputProps,
                placeholder: getPlaceholder(),
              }}
              sx={{ width: inputWidth, height: inputHeight }}
            />
          )}
        />
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </LocalizationProvider>
    </FormControl>
  );
}
