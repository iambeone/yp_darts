import React from "react";
import { Button as MuiButton } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import TournamentAddIcon from "../../images/tournament-add.svg";
import { StyledMuiIconButton, StyledIcon, TextButton } from "./ButtonStyles";

// text - текст кнопки
// onClick - функция клика по кнопке
// colors - "all-red" - красная кнопка / "empty-red" - пустая красная кнопка ? пока разрабатывается
// disabled - задает состояние задизейбленной кнопки
// Для иконок из библиотеки используем пропс icon, для других customIcon

type TButton = {
  text?: string;
  colors: string;
  iconPosition?: "right" | "left";
  iconColor?: "blue" | "red";
  disabled?: boolean;
  icon?: string;
  customIcon?: "tournament_add" | "forward_arrow";
  onClick: () => void;
};

const styleButtonRed = {
  padding: "8px 22px",
  color: "#fff",
  backgroundColor: "#D32F2F",
  borderRadius: "100px",
  // width: "100%",
  boxShadow:
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#D32F2F",
  },
  "&:disabled": {
    background: "rgba(0, 0, 0, 0.12)",
    boxShadow: "0",
  },
};

const styleButtonRedCricle = {
  padding: "8",
  color: "#fff",
  backgroundColor: "#D32F2F",
  borderRadius: "64px",
  // width: "100%",
  boxShadow:
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#D32F2F",
  },
  "&:disabled": {
    background: "rgba(0, 0, 0, 0.12)",
    boxShadow: "0",
  },
};

const styleButtonRedEmpty = {
  padding: "8px 21px",
  color: "#D32F2F",
  backgroundColor: "#fff",
  border: "1px solid rgba(211, 47, 47, 0.5)",
  borderRadius: "100px",
  boxShadow: "0",
  "&:hover": {
    color: "#D32F2F",
    backgroundColor: "#fff",
    boxShadow: "0",
  },
  "&:disabled": {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    background: "#fff",
    boxShadow: "0",
  },
};

const styleButtonRedEmptyCricle = {
  padding: "0",
  color: "#D32F2F",
  backgroundColor: "#fff",
  border: "1px solid rgba(211, 47, 47, 0.5)",
  borderRadius: "100px",
  boxShadow: "0",
  "&:hover": {
    color: "#D32F2F",
    backgroundColor: "#fff",
    boxShadow: "0",
  },
  "&:disabled": {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    background: "#fff",
    boxShadow: "0",
  },
};

const noStyle = {
  border: "0",
};

function Button({
  text,
  colors,
  icon,
  disabled,
  iconPosition,
  iconColor,
  customIcon,
  ...props
}: TButton) {
  const sxStyle = () => {
    if (colors === "all-red" && text !== "") {
      return styleButtonRed;
    } else if (colors === "empty-red" && text !== "") { // eslint-disable-line
      return styleButtonRedEmpty;
    } else if (colors === "all-red" && text === "") { // eslint-disable-line
      return styleButtonRedCricle;
    } else if (colors === "empty-red" && text === "") { // eslint-disable-line
      return styleButtonRedEmptyCricle;
    } else {
      return noStyle;
    }
  };

  const displayIcon = !!(icon || customIcon);

  const getCustomIcon = () => {
    switch (customIcon) {
      case "tournament_add":
        return <img src={TournamentAddIcon} alt="tournament-add-icon" />;
      case "forward_arrow":
        return <ArrowForwardIos sx={{ height: "12px" }} />;
      default:
        return null;
    }
  };

  return (
    <>
      {displayIcon && (
        <StyledMuiIconButton
          {...props}
          sx={sxStyle}
          disabled={disabled}
          reverse={iconPosition === "right"}
        >
          <>
            {!customIcon && (
              <StyledIcon iconColor={iconColor}>{icon}</StyledIcon>
            )}

            {customIcon && getCustomIcon()}

            <TextButton>{text}</TextButton>
          </>
        </StyledMuiIconButton>
      )}

      {!displayIcon && (
        <MuiButton
          {...props}
          size="medium"
          variant="contained"
          sx={sxStyle}
          disabled={disabled}
        >
          <TextButton>{text}</TextButton>
        </MuiButton>
      )}
    </>
  );
}

export default Button;

Button.defaultProps = {
  icon: undefined,
  disabled: false,
  iconPosition: "left",
  iconColor: undefined,
  text: "",
  customIcon: undefined,
};
