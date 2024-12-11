import "../../../../_snowpack/pkg/prismjs/themes/prism.css.proxy.js";
import {NavbarContainer} from "../../layout/Navbar/Navbar.styles.js";
import {
  Container,
  ContainerInner,
  Heading
} from "../../../pages/Main/Main.styles.js";
import Markdown from "../../../../_snowpack/pkg/markdown-to-jsx.js";
import Prism from "../../../../_snowpack/pkg/prismjs.js";
import React, {useEffect, useState} from "../../../../_snowpack/pkg/react.js";
import {Link, useParams} from "../../../../_snowpack/pkg/react-router-dom.js";
import {
  InlineCode,
  MarkdownWrapper,
  StyledPre,
  StyledTable
} from "./MarkdownRenderer.styles.js";
import "../../../../_snowpack/pkg/prismjs/components/prism-bash.js";
import "../../../../_snowpack/pkg/prismjs/components/prism-css.js";
import "../../../../_snowpack/pkg/prismjs/components/prism-javascript.js";
import "../../../../_snowpack/pkg/prismjs/components/prism-markup.js";
import "../../../../_snowpack/pkg/prismjs/components/prism-python.js";
import "../../../../_snowpack/pkg/prismjs/components/prism-sql.js";
import "../../../../_snowpack/pkg/prismjs/components/prism-typescript.js";
Prism.languages.stacktrace = {
  Error: /Error:.+/,
  Function: /at\s+\w+\s+\([^()]+\)/,
  File: /\(.*\)/
};
Prism.languages.text = {
  Text: /.*/
};
const MarkdownRenderer = () => {
  const {slug} = useParams();
  const [content, setContent] = useState("");
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
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Heading, null, /* @__PURE__ */ React.createElement(NavbarContainer, null, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    style: {textDecoration: "none", color: "inherit"}
  }, "victor gonçalves"))), /* @__PURE__ */ React.createElement(ContainerInner, null, /* @__PURE__ */ React.createElement(MarkdownWrapper, null, /* @__PURE__ */ React.createElement(Markdown, {
    options: {
      overrides: {
        pre: {
          component: ({children, ...props}) => {
            return /* @__PURE__ */ React.createElement(StyledPre, {
              ...props
            }, children);
          }
        },
        code: {
          component: InlineCode
        },
        table: {
          component: StyledTable
        }
      }
    }
  }, content)))));
};
export default MarkdownRenderer;
