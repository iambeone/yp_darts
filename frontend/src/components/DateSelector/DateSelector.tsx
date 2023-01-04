/* eslint-disable react/require-default-props */
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { FormControl, InputLabel } from "@mui/material";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

interface IDateSelector {
  label?: string;
  value?: Dayjs | null;
  onChange?: any;
  isRequired?: boolean;
}

function DateSelector({
  value = null,
  onChange,
  isRequired = true,
  label = "Дата рождения",
}: IDateSelector) {
  const [valueState, setValueState] = React.useState<Dayjs | null>(value);

  const Span = styled.span`
    color: red;
  `;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disableFuture
        openTo="year"
        value={valueState}
        views={["year", "month", "day"]}
        inputFormat="DD/MM/YYYY"
        mask="__/__/____"
        onChange={(newValue) => {
          setValueState(newValue);
          if (onChange) onChange(newValue);
        }}
        renderInput={(params) => (
          <FormControl>
            <InputLabel shrink sx={{ top: -14, left: -14 }}>
              {label}
              {isRequired ? <Span> *</Span> : <> </>}
            </InputLabel>
            <TextField
              {...params}
              inputProps={{ ...params.inputProps, placeholder: "дд/мм/гггг" }}
            />
          </FormControl>
        )}
      />
    </LocalizationProvider>
  );
}

export default DateSelector;
