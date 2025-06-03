import * as React from 'react';
import "nes.css/css/nes.min.css";

type Props = {
  iconType: 'heart' | 'star' | 'like';
  iconSize: 'large' | 'medium' | 'small';
  iconReactionType?: 'empty' | 'half' | 'transparent'; // undefined -> normal
};

export class NesReactionIcon extends React.Component<Props> {
  render() {
    const { iconType, iconSize, iconReactionType } = this.props;
    const iconClass = `nes-icon is-${iconSize} ${iconType} is-${iconReactionType}`;
    return <i className={iconClass}></i>;
  }
}
