import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  content?: string;
};

export class NesTextarea extends React.Component<Props> {
  render() {
    const { content } = this.props;
    return (
      <textarea id="textarea_field" className="nes-textarea">{content}</textarea>
    )
  }
}