import React, { ReactElement } from "react";
import Icon from "@mui/material/Icon";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./ContextMenu.module.css";

type TContextMenuProps = {
  itemsData: {
    icon: string;
    value: string;
    callback: () => void;
  }[];
  extraClass?: string;
};

function ContextMenu({
  itemsData,
  extraClass,
}: TContextMenuProps): ReactElement<TContextMenuProps> {
  return (
    <List
      className={extraClass}
      sx={{
        width: 294,
        borderRadius: 1,
        boxShadow:
          "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
      }}
      disablePadding
    >
      {itemsData.map((item) => (
        <ListItem key={item.value} disablePadding>
          <ListItemButton
            onClick={item.callback}
            sx={{
              p: "0 16px 0 20px",
              height: itemsData.length === 1 ? 52 : 41,
            }}
          >
            <ListItemIcon>
              <Icon sx={{ fontSize: 22 }}>{item.icon}</Icon>
            </ListItemIcon>

            <ListItemText
              primary={item.value}
              className={styles.contextMenuText}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

ContextMenu.defaultProps = {
  extraClass: "",
};

export default ContextMenu;
