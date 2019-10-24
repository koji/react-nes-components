import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

// snsType
// twitter, facebook, instagram, github, google
// gmail medium linkedin, twitch, youtube, reddit, whatsapp

// icon size
// large, medium, small

type Props = {
  snsType:
    | "twitter"
    | "facebook"
    | "instagram"
    | "github"
    | "google"
    | "gmail"
    | "medium"
    | "linkedin"
    | "twitch"
    | "youtube"
    | "reddit"
    | "whatsapp";
  iconSize: "large" | "medium" | "small";
};

export class NesSNSIcon extends React.Component<Props> {
  render() {
    const { snsType, iconSize } = this.props;
    const classType = `nes-icon ${snsType} is-${iconSize}`;
    return <i className={classType}></i>;
  }
}
