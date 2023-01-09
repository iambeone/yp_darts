import * as React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormLabel } from "@mui/material";
import { CalendarPickerView } from "@mui/x-date-pickers/internals/models";
import styles from "../Checkbox/Checkbox.module.css";

export default function DateTextField({
  name,
  view,
}: {
  name: string;
  // eslint-disable-next-line react/require-default-props
  view?: CalendarPickerView[];
}) {
  const [value, setValue] = React.useState(dayjs());
  return (
    <div className={styles.container}>
      <FormLabel component="legend">{name}</FormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={view || undefined}
          inputFormat={view ? "YYYY" : "DD/MM/YYYY"}
          value={value}
          onChange={(newValue) => setValue(dayjs(newValue))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
