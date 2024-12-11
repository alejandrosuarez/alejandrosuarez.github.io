import React from "react";
import {
  Container,
  HomeLink,
  Message,
  Title
} from "./NotFound.styles";

const NotFound: React.FC = () => {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Message>
        Oops! The page you're looking for doesn't exist or has been moved.
      </Message>
      <HomeLink to="/">Go Back Home</HomeLink>
    </Container>
  );
};

export default NotFound;