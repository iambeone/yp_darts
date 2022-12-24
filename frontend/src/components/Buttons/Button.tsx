import React from "react";
import { Button, IconButton } from "@mui/material";
import GetAppIcon from "@material-ui/icons/GetApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import CreateIcon from "@material-ui/icons/Create";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import styles from "./Button.module.css";

// text - опязательно передавать, можно пустую строку
// onClick - функция клика по кнопке
// colors - "all-red" - красная кнопкаб / "empty-red" - пустая красная кнопка ? пока разрабатывается
// btnDisabled - передавать либо без значения либо - кнопка отключена, либо вообще без этого пропса - кнопеп включена
// icon -
// "get-app" - значек скачать
// "to-change" - изменить, значек карандашика
// "person-add" - создать, значек челика с плюсиком
// "tourament-add" - создать, значеу кубка с плюсиком
// "arrow-right" - далее, значек стрелочки в право
// "play" - значек плей
// "eye" - значек глаза

type TButton = {
  text: string;
  onClick: () => void;
  colors: string;
  btnDisabled?: boolean;
  icon?: string;
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

function Buttons({ text, onClick, colors, icon, btnDisabled }: TButton) {
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

  const marginLeft = text !== "" ? styles.icon_left : styles.icon_no_margin;
  const marginright = text !== "" ? styles.icon_right : styles.icon_no_margin;
  return (
    <>
      {icon !== "none" && (
        <IconButton onClick={onClick} sx={sxStyle} disabled={btnDisabled}>
          {icon === "play" && (
            <PlayCircleOutlineIcon
              className={
                btnDisabled === false ? styles.icon_red : styles.icon_disabled
              }
            />
          )}
          {icon === "eye" && (
            <VisibilityIcon
              className={
                btnDisabled === false ? styles.icon_blue : styles.icon_disabled
              }
            />
          )}
          {icon === "get-app" && <GetAppIcon className={marginLeft} />}
          {icon === "to-change" && <CreateIcon className={marginLeft} />}
          <p className={styles.text_button}>{text}</p>
          {icon === "person-add" && <PersonAddIcon className={marginright} />}
          {icon === "arrow-right" && (
            <KeyboardArrowRightIcon className={marginright} />
          )}
          {icon === "tourament-add" && (
            <svg
              width="24"
              height="15"
              viewBox="0 0 24 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={marginright}
            >
              <path
                d="M24 0V1.68639H23.9944L23.9322 2.18353C23.8177 3.09842 23.5715 3.99202 23.2014 4.83672L23.1106 5.04411C22.8765 5.57828 22.5942 6.09002 22.267 6.57296L21.7048 7.4028L21.1105 8.32591C21.0089 8.48367 20.9275 8.65349 20.8681 8.83141C20.8152 8.98968 20.7802 9.15332 20.7636 9.31933L20.752 9.43456L19.3369 9.29325L19.3484 9.17802C19.3586 9.07663 19.3729 8.97577 19.3915 8.87571C19.1924 9.3593 18.9508 9.82472 18.6692 10.2664L17.6889 11.8047H16.8V13.4024H20.1778V15H11.8222V13.4024H15.2V11.8047H14.3111L13.2162 9.99296C12.9659 9.57874 12.75 9.14494 12.5706 8.69592C12.6082 8.85453 12.6353 9.01558 12.6516 9.17802L12.6631 9.29325L11.248 9.43456L11.2364 9.31933C11.2198 9.15332 11.1848 8.98968 11.1319 8.83141C11.0725 8.65349 10.9911 8.48367 10.8895 8.32591L10.2952 7.4028L9.73302 6.57296C9.40585 6.09002 9.12348 5.57828 8.88943 5.04411L8.79857 4.83672C8.42846 3.99202 8.18234 3.09842 8.06781 2.18353L8.00558 1.68639H8V0H24ZM19.9141 7.55797C19.8676 7.63023 19.8237 7.70403 19.7824 7.77924L19.8528 7.57199C20.0394 7.02236 20.1715 6.45579 20.2473 5.8804L20.8 1.68639H22.5611L22.5209 2.00738C22.4234 2.78673 22.2137 3.54795 21.8985 4.26751L21.8076 4.4749C21.6082 4.92994 21.3677 5.36586 21.089 5.77725L20.5174 6.62087L19.9141 7.55797ZM12.2762 7.89053L12.1851 7.63574C11.9734 7.04396 11.8253 6.43141 11.7432 5.80839L11.2 1.68639H9.43887L9.47905 2.00738C9.57661 2.78673 9.78627 3.54795 10.1015 4.26751L10.1924 4.4749C10.3918 4.92994 10.6323 5.36586 10.911 5.77725L11.4826 6.62087L12.0859 7.55797C12.1551 7.66555 12.2186 7.77655 12.2762 7.89053ZM5 4.99983V7.99983H8V9.99983H5V12.9998H3V9.99983H0V7.99983H3V4.99983H5Z"
                fill="white"
              />
            </svg>
          )}
        </IconButton>
      )}
      {icon === "none" && (
        <Button
          size="medium"
          variant="contained"
          sx={sxStyle}
          onClick={onClick}
          disabled={btnDisabled}
        >
          <p className={styles.text_button}>{text}</p>
        </Button>
      )}
    </>
  );
}

export default Buttons;

Buttons.defaultProps = {
  icon: "none",
  btnDisabled: false,
};
