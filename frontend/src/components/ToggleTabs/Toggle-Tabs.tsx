/* eslint-disable react/jsx-props-no-spreading */
import { styled, Tab, Tabs } from "@mui/material";
import React from "react";

function ToggleTabs({ tabs = ["1"] }: { tabs: string[] }) {
  // Что-бы создать элемент необходимо в tabs передать массив, с именами которые необходимы кнопкам.
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }

  const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
      {...props}
      centered
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    display: "inline-block",
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: "100px",
    maxWidth: "auto",
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTabs-scroller": {
      display: "inline-block",
      maxWidth: "auto",
    },
    "&.Mui-flexContainer": {
      display: "inline-block",
    },
  });

  interface StyledTabProps {
    label: string;
    id: string;
    "aria-controls": string;
  }

  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: "uppercase",
    fontStyle: "normal",
    fontWeight: "medium",
    lineHeight: "26px",
    letterSpacing: "0.46px",
    fontSize: theme.typography.pxToRem(15),
    margin: "4px 4px 0px 4px",
    color: "rgba(0, 0, 0, 0.6)",
    "&.Mui-selected": {
      color: "rgba(0, 0, 0, 0.87)",
      backgroundColor: "rgba(46, 125, 50, 0.15)",
      borderRadius: "100px",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  }));

  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      aria-label="toggle-tabs example"
    >
      {tabs.map((element, index) => {
        return (
          <StyledTab
            label={element}
            id={`toggle-tab-${index}`}
            aria-controls={`toggle-tabpanel-${index}`}
          />
        );
      })}
    </StyledTabs>
  );
}

export default ToggleTabs;
