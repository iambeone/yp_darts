import React, { ReactElement } from "react";
import Icon from "@mui/material/Icon";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import MenuUnstyled from "@mui/base/MenuUnstyled";
import StyledListItemText from "./ContextMenuStyles";
import { useSelector, useDispatch } from "../../utils/hooks";
import { setContextMenuClose } from "../../services/actions";

type TContextMenuProps = {
  icon: string;
  value: string;
  callback?: () => void;
};

function ContextMenu(): ReactElement<TContextMenuProps> {
  // const [anchorEl, setAnchorEl] = React.useState<Boolean>(false);
  // const isOpen = Boolean(anchorEl);
  let isOpen = false;
  const dispatch = useDispatch();
  // const handleClose = () => dispatch(setContextMenuClose());
  const itemsData = useSelector((state) => state.common.contextMenuData);
  const { contextMenuOpen } = useSelector((store) => store.common);

  if (contextMenuOpen) {
    isOpen = true;
  }

  const close = () => {
    isOpen = false;
    dispatch(setContextMenuClose());
  };

  return (
    <MenuUnstyled open={isOpen} onClose={close}>
      <List
        sx={{
          width: 294,
          borderRadius: 1,
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
