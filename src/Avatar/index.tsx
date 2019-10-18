import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

type Props = {
  // avatarType: string;
  iconSize: "large" | "medium" | "small";
  isRounded: boolean;
  imgSrc: string;
};

// using pixelated
const avatarStyle: React.CSSProperties = {
  imageRendering: "pixelated",
};

export class NesAvatar extends React.Component<Props> {
  render() {
    const { iconSize, isRounded, imgSrc} = this.props;
    const avatarClass = isRounded
      ? `nes-avatar is-rounded is-${iconSize}`
      : `nes-avatar is-${iconSize}`;
    return (
      <img
        className={avatarClass}
        alt="Avatar image"
        src={imgSrc}
        style={avatarStyle}
      />
    );
  }
}
