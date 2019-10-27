import * as React from 'react';
import '../../node_modules/nes.css/css/nes.css';

type Props = {
  items: string[];
  isDisc: boolean;
};

export class NesList extends React.Component<Props> {
  render() {
    const { items, isDisc } = this.props;
    const itemType = "nes-list";
    const classType = isDisc ? `${itemType} is-disc` : `${itemType} is-circle`;
    // create li items
    const listItems = items.map((item, i) =>
      <li key={`item-${i}`}>{item}</li>
    );
    return (
      <div className="list">
        <ul className={classType}>{listItems}</ul>
      </div>
    )
  }
}