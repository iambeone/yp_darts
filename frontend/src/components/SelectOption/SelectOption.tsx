import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

// Для использования необходимо передать компоненту props "label" и "options" с массивом
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
  options: TOptions[];
  inputWidth: number;
};

export default function SelectOption(props: TSelect) {
  const { options, inputWidth } = props;
  return (
    <Stack sx={{ width: inputWidth }}>
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
