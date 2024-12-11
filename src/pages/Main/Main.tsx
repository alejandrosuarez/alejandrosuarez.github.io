import { Layout } from "@app/components/";
import { NavbarContainer, NavbarOptions } from "@app/components/layout/Navbar/Navbar.styles";
import { usePageTransitions } from "@app/hooks/usePageTransitions";
import React, { useState } from "react";
import { animated } from "react-spring";

// Page Components
import About from "@app/pages/About/About";
import Blog from "@app/pages/Blog/Blog";
import Projects from "@app/pages/Projects/Projects";
import Work from "@app/pages/Work/Work";

// Page mapping object
const pages = {
  about: <About />,
  work: <Work />,
  projects: <Projects />,
  blog: <Blog />,
};

const Main: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<keyof typeof pages>("about");

  const transitions = usePageTransitions(pages[currentPage]);

  return (
    <Layout>
      <NavbarContainer>
        <h2 onClick={() => setCurrentPage("about")}>victor gonçalves</h2>
        <NavbarOptions>
          <p onClick={() => setCurrentPage("work")}>work</p>
          <p onClick={() => setCurrentPage("projects")}>projects</p>
          <p onClick={() => setCurrentPage("blog")}>blog</p>
        </NavbarOptions>
      </NavbarContainer>
      {transitions((style, item) => (
        <animated.div style={style}>{item}</animated.div>
      ))}
    </Layout>
  );
};

export default Main;
