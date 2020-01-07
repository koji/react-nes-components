import * as React from 'react';
import '../assets/nes.css';

type Props = {
  darkMode?: boolean;
  isInline: boolean;
  fieldType: 'success' | 'warning' | 'error';
  label: string;
  placeHolder?: string;
  type?: string;
  value?: string | number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string | number
  ) => void;
};

export class NesInput extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const value = e.target.value;
    // tslint:disable-next-line: no-unused-expression
    onChange && onChange(e, value);
  };

  render() {
    const {
      darkMode,
      isInline,
      fieldType,
      label,
      placeHolder,
      value,
    } = this.props;
    const outterClass = isInline ? 'nes-field' : `nes-field is-${fieldType}`;
    const inputClass = darkMode
      ? `nes-input is-${fieldType}`
      : 'nes-input is-dark';
    return (
      <div className={outterClass}>
        <label htmlFor={`${fieldType}_field`}>{label}</label>
        <input
          type="text"
          id={`${fieldType}_field`}
          className={inputClass}
          placeholder={placeHolder}
          value={value}
          onChange={e => this.handleChange(e)}
        />
      </div>
    );
  }
}
