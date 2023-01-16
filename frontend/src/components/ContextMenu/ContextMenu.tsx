import React from "react";
import Icon from "@mui/material/Icon";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import MenuUnstyled from "@mui/base/MenuUnstyled";
import { StyledListItemText, Popper, StyledList } from "./ContextMenuStyles";

type TContextMenuItem = {
  icon: string;
  value: string;
  callback: (e: React.MouseEvent<HTMLElement>) => void;
};

type TContextMenuProps = {
  handleClose: () => void;
  anchorEl: HTMLButtonElement | null;
  items: TContextMenuItem[];
};

function ContextMenu(props: TContextMenuProps) {
  const { handleClose, anchorEl, items } = props;

  return (
    <MenuUnstyled
      open={Boolean(anchorEl)}
      onClose={handleClose}
      anchorEl={anchorEl}
      slots={{ root: Popper, listbox: StyledList }}
      slotProps={{
        root: { placement: "bottom-end" },
        listbox: { id: "context-menu" },
      }}
    >
      {items &&
        items.map((item) => (
          <ListItem key={item.value} disablePadding>
            <ListItemButton
              onClick={item.callback}
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
    </MenuUnstyled>
  );
}

export default ContextMenu;
