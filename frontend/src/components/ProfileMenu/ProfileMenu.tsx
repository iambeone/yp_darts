import React, { ReactElement } from "react";
import Icon from "@mui/material/Icon";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  Typography,
  Divider,
} from "@mui/material";
import StyledListItemText from "./ProfileMenuStyles";

function ContextMenu(): ReactElement {
  // После подключения стора брать из него
  const userData = {
    username: "Людмила С.",
    email: "email@yandex.ru",
  };

  const buttonsData = [
    {
      icon: "vpn_key",
      value: "Сменить пароль",
      callback: () => {},
    },
    {
      icon: "logout",
      value: "Выход",
      callback: () => {},
    },
  ];

  return (
    <List
      sx={{
        width: 229,
        borderRadius: 1,
        boxShadow:
          "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
      }}
      disablePadding
    >
      <ListSubheader
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: "0 16px 0 20px",
          height: 82,
          justifyContent: "center",
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      >
        <Typography sx={{ fontSize: 16, lineHeight: "24px", color: "#000" }}>
          {userData.username}
        </Typography>

        <Typography sx={{ fontSize: 14, lineHeight: "20px" }}>
          {userData.email}
        </Typography>
      </ListSubheader>

      <Divider />

      {buttonsData.map((item) => (
        <ListItem key={item.value} disablePadding>
          <ListItemButton
            onClick={item.callback}
            sx={{
              p: "0 16px 0 20px",
              height: 46,
            }}
          >
            <ListItemIcon>
              <Icon sx={{ fontSize: 22 }}>{item.icon}</Icon>
            </ListItemIcon>

            <StyledListItemText primary={item.value} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ContextMenu;
