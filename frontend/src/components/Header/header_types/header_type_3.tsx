import { Icon, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderTypeThree() {
  const navigate = useNavigate();
  const mobile = window.innerWidth < 500;

  return (
    <Toolbar
      sx={{
        height: 72,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <IconButton
        sx={{
          fontSize: mobile ? "medium" : "large",
        }}
        size="medium"
        onClick={() => navigate(-1)}
      >
        <Icon>arrow_back_ios</Icon>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: mobile ? "medium" : "large",
          }}
        >
          Назад
        </Typography>
      </IconButton>
    </Toolbar>
  );
}

export default HeaderTypeThree;
