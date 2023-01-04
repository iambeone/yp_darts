import React from "react";
import Logo from "../../images/Logo.svg";
import Tabs from "../Tabs/Tabs";
import { Section, Img } from "./SidebarStyles";

function Sidebar() {
  return (
    <Section>
      <Img src={Logo} alt="Лого" />
      <Tabs />
    </Section>
  );
}

export default Sidebar;
