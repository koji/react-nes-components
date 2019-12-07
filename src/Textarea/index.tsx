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

type State = {
  value: string;
};

export class NesTextarea extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  // handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange } = this.props;
    const value = e.target.value;
    this.setState({ value: value });
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
        value={this.state.value}
        onChange={e => this.handleChange(e)}
      />
    );
  }
}
