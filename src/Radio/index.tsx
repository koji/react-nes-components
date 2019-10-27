import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

// buttonType undefined --> normal
type Props = {
  darkMode?: boolean;
  items: string[];
};

export class NesRadio extends React.Component<Props> {
  render() {
    const { darkMode, items } = this.props;
    const classType = darkMode ? `nes-radio is-dark` : `nes-radio`;
    return items.map((item, index) => {
      return (
        <label>
          <input type="radio" className={classType} name="answer" />
          <span>{item}</span>
        </label>
      );
    });
  }
}


// ToDo
// {index === 0 ? (
//             <input type="radio" className={classType} name="answer" />
//           ) : (
//             <input type="radio" className={classType} name="answer" /> */}
// )}
