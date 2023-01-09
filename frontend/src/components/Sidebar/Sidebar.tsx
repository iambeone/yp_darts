import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import Tabs from "../Tabs/Tabs";
import { Section, Img } from "./SidebarStyles";

function Sidebar() {
  return (
    <Section>
      <Link to="/">
        <Img src={Logo} alt="Лого" />
      </Link>
      <Tabs />
    </Section>
  );
}

export default Sidebar;
