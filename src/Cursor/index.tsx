import * as React from 'react';
import "nes.css/css/nes.min.css";

type Props = {
  isLeft: boolean;
  content: string;
};

export class NesCursor extends React.Component<Props> {
  render() {
    const { isLeft, content } = this.props;
    const cursorClass = isLeft
      ? 'nes-balloon from-left nes-pointer'
      : 'nes-balloon from-right nes-pointer';
    return <p className={cursorClass}>{content}</p>;
  }
}
