"use client";
import { FC, ReactNode } from "react";
import cn from "classnames";

type IButtonSize = "sm" | "md" | "lg";
type IButtonType = "primary" | "outline" | "disabled";

interface Props {
  size: IButtonSize;
  type: IButtonType;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  size = "md",
  type = "primary",
  children,
  onClick,
  className = "",
}) => {
  const BUTTON_TYPE_MAPPING: Record<IButtonType, string> = {
    primary:
      "text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-600 hover:bg-gradient-to-br shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 focus:bg-orange-200",
    outline:
      "text-gray-900 relative absolute left-0.5 top-0.5 right-0.5 bottom-0.5 bg-white rounded-lg before:bg-gradient-to-r before:from-orange-500 before:via-orange-600 before:to-orange-700 before:absolute before:-top-0.5 before:-bottom-0.5 before:-left-0.5 before:-right-0.5 before:rounded-lg before:z-[-1]",
      disabled: "text-white  bg-gradient-to-r bg-orange-500 via-orange-600 o-orange-700 cursor-not-allowed",
  };
  const BUTTON_SIZE_MAPPING: Record<IButtonSize, string> = {
    sm: "font-medium rounded-lg text-sm text-center w-24 h-10",
    md: "font-medium rounded-lg text-md text-center w-28 h-12",
    lg: "font-medium rounded-lg text-md text-center w-32 h-14",
  };
  return (
    <>
      <button
        className={cn(BUTTON_SIZE_MAPPING[size], BUTTON_TYPE_MAPPING[type], className)}
        disabled={type === "disabled"}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
