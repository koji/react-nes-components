import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

type Props = {
  iconType: "heart" | "star" | "like";
  iconSize: "large" | "medium" | "small";
  iconReaction?: "empty" | "half" | "transparent"; // undefined -> normal
};

export class NesReactionIcon extends React.Component<Props> {
  render() {
    const { iconType, iconSize, iconReaction } = this.props;
    const iconClass = `nes-icon is-${iconSize} ${iconType} is-${iconReaction}`;
    return <i className={iconClass}></i>;
  }
}
