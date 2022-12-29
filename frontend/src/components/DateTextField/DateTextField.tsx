import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

// не доделан

export default function DateTextField() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const locale = "ru";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <DesktopDatePicker
        inputFormat="дд/мм/гггг"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
