import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

type Props = {
  darkMode?: boolean;
  items: string[];
  checkedPos?: number; // add checked if undefined => first
};

export class NesCheckbox extends React.Component<Props> {
  render() {
    const { darkMode, items, checkedPos } = this.props;
    const checkedNum = checkedPos ? checkedPos : 0;
    const checkboxClass = darkMode
      ? `nes-checkbox is-dark`
      : `nes-checkbox`;
    return (
      <React.Fragment>
        {items.map((item, index) => {
          if (index === checkedNum) {
            <label>
              <input type="checkbox" className={checkboxClass} checked />
              <span>{item}</span>
            </label>;
          } else {
            <label>
              <input type="checkbox" className={checkboxClass} />
              <span>{item}</span>
            </label>;
          }
        })}
      </React.Fragment>
    );
  }
}
