import React from "react";

import { CustomButton, StyledProps } from "./style";

const Button: React.FC<StyledProps> = ({
  color = "none",
  fontWeight = "none",
  backgroundColor = "none",
  borderRadius = "none",
  padding = "none",
  onClick,
  children,
}) => {
  const _handleClick = () => {
    onClick && onClick();
  };
  return (
    <CustomButton
      color={color}
      fontWeight={fontWeight}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      padding={padding}
      onClick={_handleClick}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
