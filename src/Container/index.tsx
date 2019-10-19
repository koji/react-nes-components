import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

type Props = {
  containerTitle?: string;
  isCentered: boolean;
  isRounded: boolean;
  darkMode?: boolean;
};

export class NesContainer extends React.Component<Props> {
  render() {
    return(
      <div></div>
    );
  }
}
