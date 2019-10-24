import React from 'react';
import "../../node_modules/nes.css/css/nes.css";


interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "success" | "warning" | "error" | "disabled";
}

const NesButton: React.FunctionComponent<IProps> = (
  {
    buttonType,
    children,
    ...shared
  }) => {
          const buttonClass = buttonType
            ? `nes-btn is-${buttonType}`
            : `nes-btn`;
          return (
            <button className={buttonClass} {...shared}>
              {children}
            </button>
          );
};

export default NesButton;
