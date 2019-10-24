import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

type Props = {
  darkMode?: boolean;
  isInline: boolean;
  fieldType: "success" | "warning" | "error"
  label: string;
  placeHolder?: string;
  type?: string
  value?: string | number
  onChange?: (e: any, value: string|number) => void
};

export class NesInput extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props
    const value = e.target.value
    // const parsedValue = type === 'number' ? parseFloat(value) : value
    // tslint:disable-next-line: no-unused-expression
    onChange && onChange(e, value)
  }


  render() {
    const { darkMode, isInline, fieldType, label, placeHolder, value } = this.props;
    const outterClass = isInline ? `nes-field` : `nes-field is-${fieldType}`;
    const inputClass = darkMode ? `nes-input is-${fieldType}` : `nes-input is-dark`;
    return (
      <div className={outterClass}>
        <label htmlFor={`${fieldType}_field`}>{label}</label>
        <input
          type="text"
          id={`${fieldType}_field`}
          className={inputClass}
          placeholder={placeHolder}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

// interface IProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
//   darkMode?: boolean;
//   isInline: boolean;
//   fieldType: "success" | "warning" | "error"
//   label: string;
//   placeHolder?: string;
//   // value: string|number;
//   onChange?: (e: any, value: any) => void
// }

// export const NesInput: React.FunctionComponent<IProps> = ({ children, onChange, ...shared }) => {
//   const { darkMode, isInline, fieldType, label, placeHolder } = shared;
//   const outterClass = isInline ? `nes-field` : `nes-field is-${fieldType}`;
//   const inputClass = darkMode ? `nes-input is-${fieldType}` : `nes-input is-dark`;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // console.log(e.currentTarget.value);
//     props.onInputChange(e.currentTarget.value);
//   };


//   return (
//     <div className={outterClass}>
//       <label htmlFor={`${fieldType}_field`}>{label}</label>
//       <input
//         type="text"
//         id={`${fieldType}_field`}
//         className={inputClass}
//         placeholder={placeHolder}
//         onChange={handleChange}
//         {...shared}
//       />
//     </div>
//   );
// }
