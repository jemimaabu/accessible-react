import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ButtonComponent = ({ children, ...props }: IButtonProps) => {
  return <button {...props}>{children}</button>;
};
