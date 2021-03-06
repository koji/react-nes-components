import * as React from 'react';
import '../assets/nes.css';

type Props = {
  iconType:
    | 'nes-logo'
    | 'nes-jp-logo'
    | 'snes-logo'
    | 'snes-jp-logo'
    | 'nes-octocat'
    | 'nes-smartphone'
    | 'nes-phone';
  isAnimated?: boolean; // this is only for nes-octocat
};

export class NesArt extends React.Component<Props> {
  render() {
    const { iconType, isAnimated } = this.props;
    return (
      <i className={isAnimated ? `${iconType} animate` : `${iconType}`}></i>
    );
  }
}
