import React from "react";
import { NavbarContainer, NavbarOptions } from "./Navbar.styles";

interface NavbarProps {
  setCurrentPage: (pageName: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <NavbarContainer>
      <h2 onClick={() => setCurrentPage("about")}>victor gonçalves</h2>
      <NavbarOptions>
        <p onClick={() => setCurrentPage("work")}>work</p>
        <p onClick={() => setCurrentPage("projects")}>projects</p>
        <p onClick={() => setCurrentPage("blog")}>blog</p>
      </NavbarOptions>
    </NavbarContainer>
  );
};

export default Navbar;
