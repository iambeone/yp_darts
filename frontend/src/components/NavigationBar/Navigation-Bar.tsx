import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <header>
      <h1>NavigationBar</h1>
      <ul>
        <li>
          <NavLink to="/tournaments">tournaments</NavLink>
        </li>
        <li>
          <NavLink to="/players">players</NavLink>
        </li>
        <li>
          <NavLink to="/protocols">protocols</NavLink>
        </li>
        <li>
          <NavLink to="/settings">settings</NavLink>
        </li>
      </ul>
    </header>
  );
}
