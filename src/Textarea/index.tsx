import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  id?: string;
};

export class NesTextarea extends React.Component<Props> {
  render() {
    const { id } = this.props;
    return (
      <textarea id={id} className={"nes-textarea"}></textarea>
    )
  }
}