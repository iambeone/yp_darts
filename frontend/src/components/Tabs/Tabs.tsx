import React, { useEffect, useState } from "react";
import { tabs } from "../../utils/constants";
import {
  TabList,
  TabLink,
  TabItem,
  TabBorder,
  Group,
  Image,
  Title,
} from "./TabsStyles";

type Ttab = {
  id: number;
  title: string;
  img: string;
  imgActive: string;
  path: string;
};

function Tabs() {
  const activeTab = JSON.parse(localStorage.getItem("activeTab")!);
  const [active, setActive] = useState<Ttab>(activeTab);

  const filteredTabs = tabs.filter((tab: Ttab) => {
    if (window.innerWidth > 500) {
      return tab.title !== "Еще";
    }
    return tab.title !== "Настройки";
  });
  const [arr, setArr] = useState(filteredTabs);

  const onClick = (tab: Ttab) => {
    setActive(tab);
    localStorage.setItem("activeTab", JSON.stringify(tab));
  };

  useEffect(() => {
    window.onresize = () => {
      setArr(filteredTabs);
    };
  }, [filteredTabs, arr, setActive]);

  const checkObject = (activeObj: Ttab, obj: Ttab) => {
    return JSON.stringify(activeObj) === JSON.stringify(obj);
  };

  return (
    <TabList>
      {arr.map((tab) => {
        return (
          <TabLink
            to={tab.path}
            onClick={() => onClick(tab)}
            onKeyPress={() => onClick(tab)}
            key={tab.id}
          >
            <TabItem>
              {JSON.stringify(active) === JSON.stringify(tab) && <TabBorder />}
              <Group
                style={{
                  paddingLeft:
                    !checkObject(active, tab) && window.innerWidth > 500
                      ? "4px"
                      : "0",
                  paddingBottom:
                    !checkObject(active, tab) && window.innerWidth < 500
                      ? "4px"
                      : "0",
                }}
              >
                <Image
                  src={
                    JSON.stringify(active) === JSON.stringify(tab)
                      ? tab.imgActive
                      : tab.img
                  }
                  alt="Иконка"
                />
                <Title
                  style={{
                    color: checkObject(active, tab)
                      ? "#FFF"
                      : "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {tab.title}
                </Title>
              </Group>
            </TabItem>
          </TabLink>
        );
      })}
    </TabList>
  );
}
export default Tabs;
