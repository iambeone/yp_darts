import styled from "styled-components";
import { IconButton as MuiIconButton } from "@mui/material";
import Icon from "@mui/material/Icon";

interface IStyledMuiIconButton {
  reverse?: string;
  disabled?: boolean;
}

const StyledMuiIconButton = styled(MuiIconButton)<IStyledMuiIconButton>`
  display: flex;
  gap: 9px;
  flex-direction: ${({ reverse }) => {
    switch (reverse) {
      case "right":
        return "row-reverse";
      case "left":
        return "row";
      default:
        return "";
    }
  }};
`;

interface IStyledIcon {
  iconColor?: "red" | "blue";
}

const StyledIcon = styled(Icon)<IStyledIcon>`
  padding: 0;
  sx: {
     {
      text-align: center;
    }
  }
  color: ${({ iconColor }) => {
    switch (iconColor) {
      case "red":
        return "#D32F2F";
      case "blue":
        return "#1976D2";
      default:
        return "";
    }
  }};
`;

const TextButton = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
`;

export { StyledMuiIconButton, StyledIcon, TextButton };
