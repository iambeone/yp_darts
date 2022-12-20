import React from "react";
import { NavLink } from "react-router-dom";

export default function TournamentsPage() {
  return (
    <div>
      <h1>Tournaments</h1>
      <ul>
        <li>
          <NavLink to="1">1</NavLink>
        </li>
        <li>
          <NavLink to="2">2</NavLink>
        </li>
        <li>
          <NavLink to="3">3</NavLink>
        </li>
        <li>
          <NavLink to="4">4</NavLink>
        </li>
      </ul>
    </div>
  );
}
