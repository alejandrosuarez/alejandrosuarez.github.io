// src/components/markdown/MarkdownRenderer/MarkdownRenderer.tsx

import "prismjs/themes/prism.css";


import { NavbarContainer } from "@app/components/layout/Navbar/Navbar.styles";
import {
  Container,
  ContainerInner,
  Heading,
} from "@app/pages/Main/Main.styles";
import Markdown from "markdown-to-jsx";
import Prism from "prismjs";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CenteredImage,
  InlineCode,
  MarkdownWrapper,
  StyledBold,
  StyledPre,
  StyledTable,
} from "./MarkdownRenderer.styles";

import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-typescript";

// Define custom languages if needed
Prism.languages.stacktrace = {
  Error: /Error:.+/,
  Function: /at\s+\w+\s+\([^()]+\)/,
  File: /\(.*\)/,
};

Prism.languages.text = {
  Text: /.*/,
};

const MarkdownRenderer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/blog/${slug}.md`);
        if (!response.ok) {
          setContent("# Post Not Found\nThe requested blog post does not exist.");
          return;
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Error fetching the markdown file:", error);
        setContent("# Error\nFailed to load the blog post.");
      }
    };

    fetchMarkdown();
  }, [slug]);

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <Container>
      <Heading>
        <NavbarContainer>
          <h2>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              victor gonçalves
            </Link>
          </h2>
        </NavbarContainer>
        <ContainerInner>
          <MarkdownWrapper>
            <Markdown
              options={{
                overrides: {
                  // Override for block code
                  pre: {
                    component: ({ children, ...props }: any) => {
                      return <StyledPre {...props}>{children}</StyledPre>;
                    },
                  },
                  // Override for inline code
                  code: {
                    component: InlineCode,
                  },
                  // Override for tables
                  table: {
                    component: StyledTable,
                  },
                  strong: {
                    component: StyledBold,
                  },
                  img: {
                    component: CenteredImage,
                  },
                },
              }}
            >
              {content}
            </Markdown>
          </MarkdownWrapper>
        </ContainerInner>
      </Heading>
    </Container>
  );
};

export default MarkdownRenderer;
