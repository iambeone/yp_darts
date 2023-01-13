import { Icon, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

// для страниц первого уровня "Просмотр сведений игрока", "Изменение игрока", "Изменение игры"
// страница создания турнира и ее вкладки ("Участники", "Группы", “Игры", "Результаты")

function HeaderTypeTwo() {
  const navigate = useNavigate();
  const mobile = window.innerWidth <= 500;

  return (
    <Toolbar
      sx={{
        height: mobile ? 56 : 72,
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
      {/* что должна вызывать эта кнопка? */}
      <IconButton sx={{}} size="medium">
        <Icon>more_vert</Icon>
      </IconButton>
    </Toolbar>
  );
}

export default HeaderTypeTwo;
