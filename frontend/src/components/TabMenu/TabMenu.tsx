import * as React from "react";
import { Link, useLocation } from "react-router-dom";
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

const sxBox = {
  marginLeft: { xs: "16px", sm: "24px", lg: "40px" },
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
  const location = useLocation();
  const [value, setValue] = React.useState<number | undefined>(0);

  React.useEffect(() => {
    const lastParam = location.pathname.split("/");

    const index = lastParam.length - 1;
    const tabValue = tabs.find((el) => el.href === lastParam[index]);
    if (tabValue?.id) {
      setValue(tabValue?.id);
    } else {
      setValue(0);
    }
  }, [location, tabs]);

  return (
    <Box sx={sxBox}>
      <Tabs
        sx={sxTabs}
        value={value}
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
