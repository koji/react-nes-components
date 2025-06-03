import React from 'react';
import "nes.css/css/nes.min.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'primary' | 'success' | 'warning' | 'error' | 'disabled';
  onClick: () => void;
}

const NesButton: React.FunctionComponent<Props> = ({
  buttonType,
  children,
  ...shared
}) => {
  const buttonClass = buttonType ? `nes-btn is-${buttonType}` : 'nes-btn';
  return (
    <button className={buttonClass} {...shared}>
      {children}
    </button>
  );
};

export default NesButton;
