import * as React from 'react';
import '../assets/nes.css';
import styles from './Tag.module.css';

type Props = {
  textType: 'primary' | 'success' | 'warning' | 'error';
  item: string;
};

export class NesTag extends React.Component<Props> {
  render() {
    const { textType, item } = this.props;
    const textClass = `nes-text is-${textType}`;
    // Combine the CSS module class for the tag's structure and the nes.css classes for text styling
    const combinedClassName = `${styles.toolTag} ${textClass}`;
    return <span className={combinedClassName}>{item}</span>;
  }
}
