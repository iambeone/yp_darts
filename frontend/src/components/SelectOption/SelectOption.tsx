import * as React from "react";
import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

// Для использования необходимо передать компоненту props "inputWidth" и "options" с массивом
// эелементов для выпадающего списка

// Пример использования компонента:

// export const options = [
//     { id: 1, title: "Ten" },
//     { id: 2, title: "Twenty" },
//     { id: 3, title: "Thirty" },
//   ];
//     <SelectOption options={options} inputWidth={300} />

type TOptions = {
  id: number;
  title: string;
};

type TSelect = {
  label?: string;
  options: TOptions[];
  inputWidth: number;
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
  const { label, options, inputWidth } = props;
  return (
    <Stack sx={{ width: inputWidth }}>
      <Label>{label}</Label>
      <Autocomplete
        onChange={(event, value) => console.log(value)}
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} placeholder="Выбрать" />
        )}
      />
    </Stack>
  );
}

SelectOption.defaultProps = {
  label: null,
};
