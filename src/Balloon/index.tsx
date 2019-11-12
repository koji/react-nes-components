import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  isLeft: boolean; // true left | false right
  content: string;
};

export class NesBalloon extends React.Component<Props> {
  render() {
    const { isLeft, content } = this.props;
    const balloonClass = isLeft
      ? 'nes-balloon from-left'
      : 'nes-balloon from-right';
    return (
      <div className={balloonClass}>
        <p>{content}</p>
      </div>
    );
  }
}
