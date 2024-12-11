import React from "react";
import { Button as StyledButton } from "./Button.styles";

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

/**
 * Reusable Button component.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @returns {JSX.Element} The styled button.
 */
const Button: React.FC<ButtonProps> = ({
  color,
  backgroundColor,
  padding,
  margin,
  borderRadius,
  fontSize,
  onClick,
  children,
}) => {
  return (
    <StyledButton
      color={color}
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
      borderRadius={borderRadius}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
