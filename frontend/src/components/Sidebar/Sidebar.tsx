import React from "react";
import Logo from "../../images/Logo.svg";
import Tabs from "../Tabs/Tabs";
import { SidebarContainer, Image } from "./SidebarStyles";

function Sidebar() {
  return (
    <SidebarContainer>
      <Image src={Logo} alt="Лого" />
      <Tabs />
    </SidebarContainer>
  );
}

export default Sidebar;
