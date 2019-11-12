import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  iconType:
    | 'nes-logo'
    | 'nes-jp-logo'
    | 'snes-logo'
    | 'snes-jp-logo'
    | 'nes-octocat'
    | 'nes-smartphone'
    | 'nes-phone';
  animate?: boolean; // this is only for nes-octocat
};

export class NesArt extends React.Component<Props> {
  render() {
    const { iconType, animate } = this.props;
    return <i className={animate ? `${iconType} animate` : `${iconType}`}></i>;
  }
}
