import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Box,
  InputBase,
  Paper,
  Button,
  Chip,
  Container,
  Icon,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "../../utils/hooks";
import {
  setModalOpen,
  clearFilters,
  deleteFilter,
  getPlayers,
  setSearch,
} from "../../services/actions";
import { encodeQueryString } from "../../utils/helpers";

const tablet = window.innerWidth < 1200;
const mobile = window.innerWidth < 500;

function SearchBar(): ReactElement {
  const { gender, age, subjectRF, appliedFilters } = useSelector(
    (store) => store.filters,
  );
  const { search } = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPlayers(encodeQueryString({ gender, age, subjectRF })));
  }, [appliedFilters]);

  const counter = !!appliedFilters.length;
  const createButtonText = () => {
    if (mobile) return "";
    if (tablet) return "cоздать";
    return "cоздать\u00A0игрока";
  };

  const handleDeleteChip = (chip: string) => dispatch(deleteFilter(chip));

  const handleClearFilter = () => dispatch(clearFilters());

  const handleFilter = () => dispatch(setModalOpen(true));

  const handleCreatePlayer = () => navigate("/players/add-player");

  const container = {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    padding: mobile ? "12px 16px" : "12px 40px",
    minHeight: "66px",
    background: "rgba(0, 0, 0, 0.03)",
    rowGap: "20px",
  };

  const box = {
    display: "flex",
    alignItems: "center",
    gap: tablet ? "16px" : "24px",
  };

  const filterButton = {
    minWidth: "auto",
    padding: mobile && !counter ? "7px 9px" : "7px 18px",
    borderRadius: mobile ? "4px" : "100px",
    gap: "10px",
    "& > .MuiButton-startIcon": { m: 0 },
  };

  const paper = {
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "4px",
    width: "100%",
    height: 42,
  };

  const inputBase = {
    flex: 1,
    "& .MuiInputBase-input::placeholder": {
      opacity: 0.6,
      color: "#000",
    },
  };

  const createPlayerButton = {
    minWidth: tablet ? "auto" : "181px",
    borderRadius: "100px",
    padding: mobile ? "13px 13px" : "8px 18px",
    gap: tablet ? "10px" : 0,
    position: tablet ? "fixed" : "inherit",
    right: mobile ? "16px" : "32px",
    bottom: mobile ? "86px" : "32px",
    "& > .MuiButton-endIcon": { m: 0 },
  };

  return (
    <Container
      disableGutters={!tablet}
      maxWidth={false}
      fixed={false}
      sx={container}
    >
      <Box sx={box}>
        <Button
          sx={filterButton}
          variant="outlined"
          color="success"
          size="large"
          disableRipple
          onClick={handleFilter}
          startIcon={<Icon sx={{ width: 24, height: 24 }}>filter_list</Icon>}
          endIcon={
            counter ? (
              <Badge
                badgeContent={appliedFilters.length}
                color="success"
                sx={{ mr: "12px" }}
              />
            ) : null
          }
        >
          {mobile ? "" : "Фильтры"}
        </Button>
        <Paper component="form" sx={paper}>
          <Icon sx={{ p: "12px 11px 12px 15px", color: "rgba(0, 0, 0, 0.6)" }}>
            search
          </Icon>
          <InputBase
            sx={inputBase}
            placeholder={
              mobile ? "Поиск по имени..." : "Поиск по имени, e-mail..."
            }
            inputProps={{ "aria-label": "Поиск" }}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            value={search}
          />
        </Paper>
        <Button
          sx={createPlayerButton}
          color="error"
          variant="contained"
          size="large"
          disableRipple
          endIcon={tablet ? <Icon>person_add</Icon> : null}
          onClick={handleCreatePlayer}
        >
          {createButtonText()}
        </Button>
      </Box>
      {counter ? (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            maxWidth: mobile ? "calc(100vw - 32px)" : "calc(100vw - 198px)",
            overflowX: "auto",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {appliedFilters.map((chip: string) => (
            <Chip
              key={chip}
              label={chip}
              color="success"
              onDelete={() => handleDeleteChip(chip)}
            />
          ))}
          <Chip label="Очистить фильтр" onClick={handleClearFilter} />
        </Stack>
      ) : null}
    </Container>
  );
}

export default SearchBar;
