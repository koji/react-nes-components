import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  id?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  // content: string;
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    value: string | number
  ) => void;
};

export class NesTextarea extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange } = this.props;
    const value = e.target.value;
    onChange && onChange(e, value);
  };

  render() {
    const { id, rows, cols, placeholder } = this.props;
    return (
      <textarea
        id={id}
        rows={rows}
        cols={cols}
        className="nes-textarea"
        placeholder={placeholder}
        onChange={e => this.handleChange(e)}
      />
    );
  }
}
