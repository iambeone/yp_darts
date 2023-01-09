import styled from "styled-components";
import { ListItemText } from "@mui/material";
import PopperUnstyled from "@mui/base/PopperUnstyled";

const StyledListItemText = styled(ListItemText)`
  & > span {
    font-size: 14px;
  }
`;

const Popper = styled(PopperUnstyled)`
  z-index: 100;
`;

export { StyledListItemText, Popper };
