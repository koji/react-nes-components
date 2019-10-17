import * as React from 'react';
import "../../node_modules/nes.css/css/nes.css";

// buttonType undefined --> normal
type Props = {
  buttonType?: "primary" | "success" | "warning" | "error" | "disabled";
  label: string;
};

export class NesButton extends React.Component<Props> {
  render() {
    const { buttonType, label } = this.props;
    const classType = buttonType ? `nes-btn is-${buttonType}` : `nes-btn`;
    return (
      <button type="button" className={classType}>{label}</button>
    )
  }
}