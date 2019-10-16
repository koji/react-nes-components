import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  textType: string;
  content: string;
  fontSize: number;
};

export class NesText extends React.Component<Props> {
  render(){
    const { textType, content, fontSize } = this.props;
    let textClass = "nes-text";
    const textStyle: React.CSSProperties = {
      fontSize: `${fontSize}px`,
    }
    switch(textType.toLowerCase()) {
      case "primary":
        textClass = `${textClass} is-primary`;
        break;
      case "success":
        textClass = `${textClass} is-success`;
        break;
      case "warning":
        textClass = `${textClass} is-warning`;
        break;
      case "error":
        textClass = `${textClass} is-error`;
        break;
      case "disabled":
        textClass = `${textClass} is-disabled`;
        break;
      default:
        textClass = `${textClass} is-primary`;
        break;
    }
    return(
      <span className={textClass} style={textStyle}>{content}</span>
    )
  }
}