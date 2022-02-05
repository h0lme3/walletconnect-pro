import styled from "styled-components";
import { ReactNode } from "react";

export interface ButtonProp {
  children?: ReactNode;
  [key: string]: unknown;
}

export interface StyledProps extends ButtonProp {
  color?: string;
  fontWeight?: any;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  onClick?: any;
}

export const CustomButton = styled.div<StyledProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  background: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  text-align: center;
  cursor: pointer;
`;
