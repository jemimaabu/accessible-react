/** @jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../../styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ButtonComponent = ({ children, ...props }: IButtonProps) => {
  useEffect(() => {
    document.title = "Accessible React | Button";
  });

  return <button {...props}>{children}</button>;
};
