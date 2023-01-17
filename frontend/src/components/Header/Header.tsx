import React from "react";
import { AppBar, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation, useMatch } from "react-router-dom";
import HeaderTypeOne from "./HeaderTypes/HeaderType1";
import HeaderTypeTwo from "./HeaderTypes/HeaderType2";
import HeaderTypeThree from "./HeaderTypes/HeaderType3";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.54)",
    },
  },
  spacing: 4,
});

function Header() {
  const mobile = window.innerWidth <= 500;
  const location = useLocation();
  const matchPlayersTable = useMatch("/players/:pageNumber");
  const matchPlayerInfo = useMatch("/player/:id");

  const headerToolbar = (path: string) => {
    if (
      path === "/" ||
      path === matchPlayersTable?.pathname ||
      path === "/tournaments" ||
      path === "/settings"
    ) {
      return <HeaderTypeOne />;
    }
    if (path === "/profile" || path === matchPlayerInfo?.pathname) {
      return <HeaderTypeTwo />;
    }
    return <HeaderTypeThree />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          boxSizing: "border-box",
          height: mobile ? 56 : 72,
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        <AppBar
          position="sticky"
          sx={{ bgcolor: "background.paper", boxShadow: "none" }}
        >
          {headerToolbar(location.pathname)}
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
