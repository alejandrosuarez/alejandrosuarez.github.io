import React, { ReactNode } from "react";
import { Container, Heading } from "./Layout.styles";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Heading>{children}</Heading>
    </Container>
  );
};

export default Layout;
