import * as React from 'react';
import '../assets/nes.css';

type Props = {
  label?: string;
  options: Array<string|number>;
  value: Array<string|number>;
  selectType?: "success" | "warning" | "error";
  darkMode?: boolean
};

type State = {
  value: string | number;
};

// NES.css select
export class NesDropdown extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange(e: React.FormEvent<HTMLSelectElement>) {
    this.setState({ value: e.currentTarget.value });
  }

  render() {
    const {label, options, value, selectType, darkMode } = this.props;
    const optionElms = options.map((option, i) =>
      <option key={`option-${i}`} value={value[i]}>{option}</option>
    );
    const labelType = label ? `${selectType}_select` : `default_select`;
    const selectId = selectType ? `${selectType}_select` : `default_select`;
    let selectClass = selectType ? `nes-select is-${selectType}` : `nes-select`;
    selectClass = darkMode ? `${selectClass} is-dark` : `${selectClass}`;
    return (
      <React.Fragment>
      {
        label && (
            <label htmlFor={labelType}>{label}</label>
        )
      }
      <div className={selectClass}>
        <select required id={selectId} onChange={e => this.handleChange}>
          {optionElms}
        </select>
      </div>
      </React.Fragment>
    )
  }
}
