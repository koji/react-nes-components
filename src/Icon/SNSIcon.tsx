import * as React from 'react';
import '../assets/nes.css';

// snsType
// twitter, facebook, instagram, github, google
// gmail medium linkedin, twitch, youtube, reddit, whatsapp

// icon size
// large, medium, small

type Props = {
  iconType:
    | 'twitter'
    | 'facebook'
    | 'instagram'
    | 'github'
    | 'google'
    | 'gmail'
    | 'medium'
    | 'linkedin'
    | 'twitch'
    | 'youtube'
    | 'reddit'
    | 'whatsapp';
  iconSize: 'large' | 'medium' | 'small';
};

export class NesSNSIcon extends React.Component<Props> {
  render() {
    const { iconType, iconSize } = this.props;
    const classType = `nes-icon ${iconType} is-${iconSize}`;
    return <i className={classType}></i>;
  }
}
