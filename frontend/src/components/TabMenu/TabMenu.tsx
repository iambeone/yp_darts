import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// * чтобы испоотзовать нужно передать массив объектов
// * label - названи таба
// * href - ссылка на нужную страницу, роутинг
// ? disabled на всякий слусай

type TTabMenuProps = {
  tabs: {
    label: string;
    href: string;
    disabled: boolean;
    id: number;
  }[];
};

const sxLink = {
  padding: "9px 16px 9px 16px",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.4px",
  textTransform: "uppercase",
  maxHeight: "42px",
  minHeight: "42px",
  boxSizing: "border-box",
};

const sxTabs = {
  height: "42px",
  maxHeight: "42px",
  minHeight: "42px",
};

function TabMenu({ tabs }: TTabMenuProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        sx={sxTabs}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabs.map((e) => {
          return (
            <Tab
              sx={sxLink}
              key={e.id}
              label={e.label}
              to={e.href}
              disabled={e.disabled}
              component={Link}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}

export default TabMenu;
