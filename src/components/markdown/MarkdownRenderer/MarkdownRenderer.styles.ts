// src/components/markdown/MarkdownRenderer/MarkdownRenderer.styles.ts

import { grayscale } from "@app/styles/variables";
import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1em;

  th, td {
    border: 1px solid ${grayscale[300]};
    padding: 0.5em;
    text-align: left;
  }

  th {
    background-color: ${grayscale[200]};
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: ${grayscale[100]};
  }
`;

export const InlineCode = styled.code`
  background: rgba(135, 131, 120, 0.15);
  border-radius: 3px;
  padding: 4px 6px;
  font-family: Menlo, Monaco, "Courier New", monospace;
  color: rgb(235, 87, 87);
  font-size: 0.9em;
  line-height: 1.4;
  /* Ensure it stays inline */
`;

export const StyledPre = styled.pre`
  background: ${grayscale[100]};
  border-radius: 5px;
  padding: 1em;
  margin-bottom: 1em;
  display: block;
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto;

  /* Reset and normalize the code styles */
  code {
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 0.9em;
    white-space: pre; /* Preserve formatting for block code */
    padding: 0; /* Reset padding */
    margin: 0; /* Reset margin */
    background: none; /* Ensure no background from InlineCode */
    border: none; /* Reset any border styles */
  }
`;


export const MarkdownWrapper = styled.div`
  width: 100%;
  margin-top: 2em;

  /* Paragraph Styling */
  p {
    margin-top: 24px;
    margin-bottom: 24px;
    color: ${grayscale[800]};
    font-size: 1em;
    line-height: 1.6;
    white-space: pre-wrap; /* Preserve line breaks within paragraphs */
  }

  /* Heading Styling with Different Font Sizes (Similar to Notion) */
  h1 {
    color: ${grayscale[900]};
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 32px; /* h1: 32px */
  }

  h2 {
    color: ${grayscale[900]};
    margin-top: 28px;
    margin-bottom: 28px;
    font-size: 24px; /* h2: 24px */
  }

  h3 {
    color: ${grayscale[900]};
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 20px; /* h3: 20px */
  }

  h4 {
    color: ${grayscale[900]};
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px; /* h4: 16px */
  }

  h5 {
    color: ${grayscale[900]};
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 14px; /* h5: 14px */
  }

  h6 {
    color: ${grayscale[900]};
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 12px; /* h6: 12px */
  }

  /* List Styling - Standard Indentation Without Extra Initial Indent */
  ul, ol {
    margin-left: 1.5em; /* Standard indentation */
    padding-left: 0; /* Remove left padding to prevent double indentation */
    list-style-position: outside; /* Bullets/numbers outside the list container */
  }

  li {
    margin-bottom: 0.5em;
    /* Optional: Add custom bullet styles if desired */
  }

  /* Blockquote Styling */
  blockquote {
    border-left: 4px solid ${grayscale[300]};
    padding-left: 1em;
    color: ${grayscale[600]};
    font-style: italic;
    margin: 1em 0;
  }

  /* Link Styling */
  a {
    color: ${grayscale[500]};
    text-decoration: underline;
    &:hover {
      color: ${grayscale[700]};
    }
  }

  /* Image Styling */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 1em;
  }

  hr {
    margin-top: 3em;
    margin-bottom: 3em;
  }
`;

