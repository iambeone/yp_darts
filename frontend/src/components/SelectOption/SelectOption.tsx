import * as React from "react";
import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";
import { FormHelperText } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export type TOptions = {
  id: number;
  title: string;
};

type TSelect = {
  label?: string;
  options: TOptions[];
  inputWidth?: number;
  inputHeight?: number;
  onChangeOption: (value: TOptions | null) => void;
  sx?: any;
  value?: TOptions;
  onBlur?: any;
  error?: boolean;
  helperText?: string;
};

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

export default function SelectOption(props: TSelect) {
  const {
    label,
    options,
    inputWidth,
    inputHeight,
    onChangeOption,
    sx,
    value,
    onBlur,
    error,
    helperText,
  } = props;
  return (
    <Stack sx={sx}>
      <Label>{label}</Label>
      <Autocomplete
        isOptionEqualToValue={(option, parameter) => option.id === parameter.id}
        value={value}
        onBlur={onBlur}
        onChange={(event, newValue) => {
          onChangeOption(newValue);
        }}
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Выбрать"
            error={error}
            sx={{ width: inputWidth, height: inputHeight }}
          />
        )}
      />
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </Stack>
  );
}

SelectOption.defaultProps = {
  label: null,
  sx: null,
  value: null,
  inputWidth: null,
  inputHeight: null,
  onBlur: null,
  error: false,
  helperText: null,
};
