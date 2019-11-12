import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

// barType undefined --> black
type Props = {
  barType?: 'primary' | 'success' | 'warning' | 'error' | 'pattern';
  value: number;
  max: number;
};

export class NesProgress extends React.Component<Props> {
  render() {
    const { barType, value, max } = this.props;
    const classType = barType ? `nes-progress is-${barType}` : 'nes-progress';
    return <progress className={classType} value={value} max={max}></progress>;
  }
}
