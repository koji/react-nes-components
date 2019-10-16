import * as React from 'react';
import "../../node_modules/nes.css/css/nes.css";

// buttonType empty --> normal
type Props = {
  buttonType: "primary" | "success" | "warning" | "error" | "disabled" | "";
  label: string;
};

export class NesButton extends React.Component<Props> {
  render() {
    const { buttonType, label } = this.props;
    const classType = `nes-btn is-${buttonType}`;
    return (
      <button type="button" className={classType}>{label}</button>
    )
  }
}