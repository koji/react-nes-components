import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

// buttonType undefined --> normal
type Props = {
  darkMode: boolean;
  labels: string[];
};

export class NesRadio extends React.Component<Props> {
  render() {
    const { darkMode, labels } = this.props;
    const classType = darkMode ? `nes-radio is-dark` : `nes-radio`;
    return (
      labels.map((label, index) => {
        <label>
          {index === 0 ? (
            <input type="radio" className={classType} name="answer" checked />
          ) : (
            <input type="radio" className={classType} name="answer"/>
          )}
          <span>{label}</span>
        </label>;
      })
    );
  }
}
