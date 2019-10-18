import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

type Props = {
  badgeType: "dark" | "primary" | "success" | "warning" | "error" ;
  isSplited: boolean;
  splits?: Array<"dark" | "primary" | "success" | "warning" | "error">;
  // badgeSize: "large" | "medium" | "small";
  contents: string[];
};

export class NesBadge extends React.Component<Props> {
  render() {
    const { badgeType, isSplited, splits, /* badgeSize, */ contents } = this.props;
    const badgeClass = `is-${badgeType}`;
    return (
      <React.Fragment>
      {isSplited ? (
        splits && (
          <a href="#" className="nes-badge is-splited">
            <span className={`is-${splits[0]}`}>{contents[0]}</span>
            <span className={`is-${splits[1]}`}>{contents[1]}</span>
          </a>
        )
        ):(
        <a href="#" className="nes-badge">
          <span className={badgeClass}>{contents[0]}</span>
        </a>
      )}
      </React.Fragment>
    );
  }
}
