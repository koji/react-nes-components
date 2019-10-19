import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

type Props = {
  darkMode?: boolean;
  isInline: boolean;
  fieldType: "success" | "warning" | "error"
  label: string;
  placeHolder?: string;
};

export class NesInput extends React.Component<Props> {
  render() {
    const { darkMode, isInline, fieldType, label, placeHolder } = this.props;
    const outterClass = isInline ? `nes-field` : `nes-field is-${fieldType}`;
    const inputClass = darkMode ? `nes-input is-${fieldType}` : `nes-input is-dark`;
    return(
      <div className={outterClass}>
        <label htmlFor={`${fieldType}_field`}>{label}</label>
        <input type="text" id={`${fieldType}_field`} className={inputClass} placeholder={placeHolder} />
      </div>
    );
  }
}
