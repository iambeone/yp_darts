import React, { ReactElement, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar(): ReactElement {
  const [state, setState] = useState("");

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    if (state) console.log(state);
    setState("");
  };

  return (
    <Paper
      component="form"
      onSubmit={searchSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: window.innerWidth >= 500 ? 42 : 40,
      }}
    >
      <SearchIcon sx={{ p: "12px 15px", color: "rgba(0, 0, 0, 0.6)" }} />
      <InputBase
        sx={{
          flex: 1,
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0.15px",
          color: "rgba(0, 0, 0, 0.6)",
        }}
        placeholder="Поиск по названию"
        inputProps={{ "aria-label": "Поиск" }}
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
    </Paper>
  );
}

export default SearchBar;
