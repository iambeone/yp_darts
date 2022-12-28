import { Icon, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

// для страниц первого уровня "Игроки", "Турниры", "Настройки"

function HeaderTypeOne() {
  const navigate = useNavigate();
  const mobile = window.innerWidth <= 500;

  return (
    <Toolbar
      sx={{
        height: mobile ? 56 : 72,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      {/* добавить проверку авторизации и перенаправлять на логин */}
      <IconButton onClick={() => navigate("/profile")} size="medium">
        <Icon>account_circle</Icon>
      </IconButton>
    </Toolbar>
  );
}

export default HeaderTypeOne;
