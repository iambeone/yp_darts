import React from "react";
import styled from "styled-components";
import Logo from "../../images/Logo.svg";
import Tabs from "../Tabs/Tabs";
import { SidebarContainer, Image } from "./SidebarStyles";

const Section = styled.section`
  position: relative;
  width: 248px;
  height: 100%;
  background-color: #003200;
  @media (max-width: 900px) {
    width: 150px;
  }
  @media (max-width: 500px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: flex-end;
  }
`;

const Img = styled.img`
  display: block;
  margin: 0 auto 0;
  padding-top: 64px;

  @media (max-width: 900px) {
    padding-top: 32px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

function Sidebar() {
  return (
    <Section>
      <Img src={Logo} alt="Лого" />
      <Tabs />
    </Section>
  );
}

export default Sidebar;
