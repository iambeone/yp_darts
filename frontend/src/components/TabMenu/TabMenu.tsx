import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// * чтобы испоотзовать нужно передать массив объектов
// * label - названи таба
// * href - ссылка на нужную страницу, роутинг
// ? disabled на всякий слусай

// const tabs = [
//   { label: "Основные параметры", href: "/params", disabled: false },
//   { label: "Структура турнира", href: "/structure", disabled: false },
//   { label: "Участники", href: "/participants", disabled: false },
//   { label: "Группы", href: "/groups", disabled: false },
//   { label: "Игры", href: "/games", disabled: true },
//   { label: "Результаты", href: "/results", disabled: true },
// ];

type TLinkTabProps = {
  label: string;
  href: string;
  disabled: boolean;
};

type TTabMenuProps = {
  tabs: {
    label: string;
    href: string;
    disabled: boolean;
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

function LinkTab(props: TLinkTabProps) {
  return (
    <Tab
      sx={sxLink}
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props} // eslint-disable-line
    />
  );
}

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
        {tabs.map((e, i) => {
          return <LinkTab key={i} label={e.label} href={e.href} disabled={e.disabled}/>; // eslint-disable-line
        })}
      </Tabs>
    </Box>
  );
}

export default TabMenu;
