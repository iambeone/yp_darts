import styled from "styled-components";
import { ListItemText, List } from "@mui/material";
import PopperUnstyled from "@mui/base/PopperUnstyled";

const StyledListItemText = styled(ListItemText)`
  & > span {
    font-size: 14px;
  }
`;

const Popper = styled(PopperUnstyled)`
  z-index: 100;
`;

const StyledList = styled(List)`
  width: 294px;
  border-radius: 1px;
  background-color: #fff;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  padding: 0;
`;
export { StyledListItemText, Popper, StyledList };
