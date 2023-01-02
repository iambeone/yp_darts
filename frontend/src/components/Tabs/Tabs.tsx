import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { tabs } from "../../utils/constants";

type Ttab = {
  id: number;
  title: string;
  img: string;
  imgActive: string;
  path: string;
};

const Ul = styled.ul`
  margin: 56px 0 0 0;
  padding: 0;
  @media (max-width: 500px) {
    margin-top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Links = styled(Link)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 32px;

  &:last-of-type {
    width: 100%;
    position: absolute;
    bottom: 64px;
    margin-bottom: 0;
    left: 0;
  }

  @media (max-width: 900px) {
    &:last-of-type {
      bottom: 32px;
      z-index: 10;
    }
  }

  @media (max-width: 500px) {
    width: 100px;
    margin-bottom: 0;

    &:last-of-type {
      position: relative;
      width: 60px;
      bottom: 0;
    }
  }
`;

const Group = styled.div`
  display: flex;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    width: 100px;
  }
`;

const Li = styled.li`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    height: 64px;
  }

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const Border = styled.div`
  width: 4px;
  height: 67px;
  background-color: #fff;
  border-radius: 0 4px 4px 0;

  @media (max-width: 900px) {
    height: 64px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 4px;
    border-radius: 4px 4px 0 0;

    &:last-of-type {
      width: 60px;
    }
  }
`;

const Img = styled.img`
  padding: 0;
  width: 26px;
  margin: 0 20px 0 28px;

  @media (max-width: 900px) {
    margin: 0 0 12px 0;
  }

  @media (max-width: 500px) {
    &:last-of-type {
      height: 18px;
    }
  }
`;

const Title = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  @media (max-width: 500px) {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 16px;
  }
`;

function Tabs() {
  const activeTab = JSON.parse(localStorage.getItem("activeTab")!);
  const [active, setActive] = useState<Ttab>(activeTab);

  const filteredTabs = tabs.filter((tab) => {
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
    <Ul>
      {arr.map((tab) => {
        return (
          <Links
            to={tab.path}
            onClick={() => onClick(tab)}
            onKeyPress={() => onClick(tab)}
            key={tab.id}
          >
            <Li>
              {checkObject(active, tab) && <Border />}
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
                <Img
                  src={checkObject(active, tab) ? tab.imgActive : tab.img}
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
            </Li>
          </Links>
        );
      })}
    </Ul>
  );
}
export default Tabs;
