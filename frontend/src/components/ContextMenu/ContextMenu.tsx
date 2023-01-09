import React from "react";
import Icon from "@mui/material/Icon";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import MenuUnstyled from "@mui/base/MenuUnstyled";
import { StyledListItemText, Popper } from "./ContextMenuStyles";
import { useSelector } from "../../utils/hooks";

type TContextMenuProps = {
  close: () => void;
  anchorEl: HTMLButtonElement | null;
};

function ContextMenu(props: TContextMenuProps) {
  const { close, anchorEl } = props;
  const itemsData = useSelector((state) => state.common.contextMenuData?.items);

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
        {itemsData &&
          itemsData.map((item) => (
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

                <StyledListItemText primary={item.value} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </MenuUnstyled>
  );
}

export default ContextMenu;
