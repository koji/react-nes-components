import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  link?: string;
  badgeType: Array<'dark' | 'primary' | 'success' | 'warning' | 'error'>;
  // badgeSize: "large" | "medium" | "small";
  contents: string[];
};

export class NesBadge extends React.Component<Props> {
  render() {
    const { link, badgeType, /* badgeSize, */ contents } = this.props;
    const isSplited = badgeType.length === 2 ? true : false;
    // if badgeType's length is more than 2, the badge will be a splited badge
    const badgeClass = isSplited ? 'nes-badge is-splited' : 'nes-badge';
    const linkTo = link ? link : '#';
    return (
      <a href={linkTo} className={badgeClass}>
        <span className={`is-${badgeType[0]}`}>{contents[0]}</span>
        {isSplited && (
          <span className={`is-${badgeType[1]}`}>{contents[1]}</span>
        )}
      </a>
    );
  }
}
