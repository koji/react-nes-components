import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  darkMode?: boolean;
  isCentered?: boolean;
  isBordered?: boolean;
  headers: string[];
  items: Array<string | number>;
};

// 1. check headers.length => the number of header
// 2. item's the number of columns is based on No.1

export class NesTable extends React.Component<Props> {
  render() {
    const { darkMode, isCentered, isBordered, headers, items } = this.props;
    let tableClass = 'nes-table';
    tableClass = isCentered ? `${tableClass} is-bordered` : tableClass;
    tableClass = isBordered ? `${tableClass} is-centered` : tableClass;
    tableClass = darkMode ? `${tableClass} is-dark` : tableClass;

    const colNum = headers.length;
    const rowNum = Math.ceil(items.length / colNum);
    const tableBody = [];
    for (let i = 0; i < rowNum; i++) {
      const tmpItems = items.slice(i * colNum, i * colNum + colNum);
      const body = tmpItems.map(item => <td key={`table-${item}`}>{item}</td>);
      tableBody.push(body);
    }
    return (
      <div className="nes-table-responsive">
        <table className={tableClass}>
          <thead>
            <tr>
              {headers.map(header => (
                <th key={`table-${header}`}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((row, i) => (
              <tr key={`table-row-${i}`}>{row}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
