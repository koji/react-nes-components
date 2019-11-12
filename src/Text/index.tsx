import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  textType: 'primary' | 'success' | 'warning' | 'error' | 'disabled';
  content: string;
  fontSize: number;
};

export class NesText extends React.Component<Props> {
  render() {
    const { textType, content, fontSize } = this.props;
    const textClass = `nes-text is-${textType}`;
    const textStyle: React.CSSProperties = {
      fontSize: `${fontSize}px`,
    };
    return (
      <span className={textClass} style={textStyle}>
        {content}
      </span>
    );
  }
}
