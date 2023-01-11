import React from "react";
import Icon from "@mui/material/Icon";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import MenuUnstyled from "@mui/base/MenuUnstyled";
import { StyledListItemText, Popper } from "./ContextMenuStyles";

type TContextMenuItem = {
  icon: string;
  value: string;
  callback: (e: React.MouseEvent<HTMLElement>) => void;
};

type TContextMenuProps = {
  close: () => void;
  anchorEl: HTMLButtonElement | null;
  items: TContextMenuItem[];
};

function ContextMenu(props: TContextMenuProps) {
  const { close, anchorEl, items } = props;
  return (
    <MenuUnstyled
      open={Boolean(anchorEl)}
      onClose={close}
      anchorEl={anchorEl}
      slots={{ root: Popper }}
      slotProps={{ root: { placement: "bottom-end" } }}
    >
      <List
        sx={{
          width: 294,
          borderRadius: 1,
          backgroundColor: "#fff",
          boxShadow:
            "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
        }}
        disablePadding
      >
        {items &&
          items.map((item) => (
            <ListItem key={item.value} disablePadding>
              <ListItemButton
                onClick={item.callback}
                data-id={anchorEl?.dataset.id}
                sx={{
                  p: "0 16px 0 20px",
                  height: items.length === 1 ? 52 : 41,
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
    </MenuUnstyled>
  );
}

export default ContextMenu;
