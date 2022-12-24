import React, { ReactElement, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";
import { Badge, Box, Chip, Container, Stack } from "@mui/material";

function SearchBar(): ReactElement {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState([
    { chip: "chip1", id: 1 },
    { chip: "chip2", id: 2 },
    { chip: "chip3", id: 3 },
    { chip: "chip4", id: 4 },
  ]);

  const tablet = window.innerWidth < 1200;
  const mobile = window.innerWidth < 500;
  const counter = !!filters.length;
  const createButtonText = () => {
    if (mobile) return "";
    if (tablet) return "cоздать";
    return "cоздать\u00A0турнир";
  };

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    if (search) console.log(search);
    setSearch("");
  };

  const handleDeleteChip = (id: number) => {
    setFilters(filters.filter((el) => el.id !== id));
  };

  const handleClearFilter = () => {
    setFilters([]);
  };

  const handleFilter = () => {
    // eslint-disable-next-line no-console
    console.log("filters");
  };

  const handleCreateTournament = () => {
    // eslint-disable-next-line no-console
    console.log("createTournament");
  };

  return (
    <Container
      disableGutters={!tablet}
      maxWidth={false}
      fixed={false}
      sx={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        padding: mobile ? "12px 16px" : "12px 40px",
        maxWidth: "1192px",
        minHeight: "66px",
        background: "rgba(0, 0, 0, 0.03)",
        rowGap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: tablet || mobile ? "16px" : "24px",
        }}
      >
        <Button
          sx={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "15px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            minWidth: "auto",
            padding: mobile && !counter ? "7px 9px" : "7px 18px",
            borderRadius: mobile ? "4px" : "100px",
            gap: "10px",
            "& > .MuiButton-startIcon": { m: 0 },
          }}
          variant="outlined"
          color="success"
          size="large"
          onClick={handleFilter}
          startIcon={<FilterListIcon sx={{ width: 24, height: 24 }} />}
          endIcon={
            counter ? (
              <Badge
                badgeContent={filters.length}
                color="success"
                sx={{ mr: "12px" }}
              />
            ) : null
          }
        >
          {mobile ? "" : "Фильтры"}
        </Button>
        <Paper
          component="form"
          onSubmit={searchSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.23)",
            borderRadius: "4px",
            width: "100%",
            height: 42,
          }}
        >
          <SearchIcon
            sx={{ p: "12px 11px 12px 15px", color: "rgba(0, 0, 0, 0.6)" }}
          />
          <InputBase
            sx={{
              flex: 1,
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.15px",
              "& .MuiInputBase-input::placeholder": {
                opacity: 0.6,
                color: "#000",
              },
            }}
            placeholder="Поиск по названию"
            inputProps={{ "aria-label": "Поиск" }}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </Paper>
        <Button
          sx={{
            fontFamily: "Roboto",
            fontSize: "15px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            minWidth: tablet ? "auto" : "181px",
            borderRadius: "100px",
            padding: mobile ? "13px 13px" : "8px 18px",
            gap: tablet ? "10px" : 0,
            position: tablet ? "fixed" : "inherit",
            right: mobile ? "16px" : "32px",
            bottom: mobile ? "86px" : "32px",
            "& > .MuiButton-endIcon": { m: 0 },
          }}
          color="error"
          variant="contained"
          size="large"
          endIcon={tablet ? <PersonAddIcon /> : null}
          onClick={handleCreateTournament}
        >
          {createButtonText()}
        </Button>
      </Box>
      {counter ? (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {filters.map(({ chip, id }) => (
            <Chip
              key={id}
              label={chip}
              color="success"
              onDelete={() => handleDeleteChip(id)}
            />
          ))}
          <Chip label="Очистить фильтр" onClick={handleClearFilter} />
        </Stack>
      ) : null}
    </Container>
  );
}

export default SearchBar;
