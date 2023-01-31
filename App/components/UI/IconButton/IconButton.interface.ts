import { ButtonHTMLAttributes, ReactNode } from "react";

interface IIconButton {
  icon: ReactNode;
}

type TypeHtmlButton = ButtonHTMLAttributes<HTMLButtonElement> & IIconButton;

export interface IIconButtonProps extends TypeHtmlButton {}
