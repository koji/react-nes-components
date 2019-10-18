import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

type Props = {
  darkMode: boolean;
  isCentered: boolean;
  isBordered: boolean;
  headers: string[];
  items: Array<string|number>;
};

// 1. check headers.length => the number of header
// 2. item's the number of columns is based on No.1

export class NesTable extends React.Component<Props> {
  render() {
    const {
      darkMode,
      isCentered,
      isBordered,
      headers,
      items,
    } = this.props;
    let tableClass = "nes-table";
    tableClass = isCentered ? `${tableClass} is-bordered` : tableClass;
    tableClass = isBordered ? `${tableClass} is-centered` : tableClass;
    tableClass = darkMode ? `${tableClass} is-dark` : tableClass;

    const colNum = headers.length;
    const rowNum = Math.ceil(items.length / colNum);
    const tableBody = [];
    for(let i=0; i=rowNum; i++) {
      const tmpItems = items.splice(i*colNum, colNum);
      const body = tmpItems.map(item => <td>{item}</td>)
      tableBody.push(body);
    }

    return (
      <div className="nes-table-responsive">
        <table className={tableClass}>
          <thead>
            <tr>
              {/* table header */}
              {headers.map(header => <th>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {/* table body */}
            {tableBody.map(row => <tr>{row}</tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}
