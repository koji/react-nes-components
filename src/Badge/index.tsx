import * as React from "react";
import "../../node_modules/nes.css/css/nes.css";

type Props = {
  link?: string;
  badgeType?: "dark" | "primary" | "success" | "warning" | "error" ; // splited case don't need this
  isSplited?: boolean;
  splits?: Array<"dark" | "primary" | "success" | "warning" | "error">;
  // badgeSize: "large" | "medium" | "small";
  contents: string[];
};

export class NesBadge extends React.Component<Props> {
  render() {
    const { link, badgeType, isSplited, splits, /* badgeSize, */ contents } = this.props;
    const badgeClass = `is-${badgeType}`;
    console.log(badgeClass);
    return (
      <React.Fragment>
      {isSplited ? (
        splits && (
          <a href={link ? link : "#"} className="nes-badge is-splited">
            <span className={`is-${splits[0]}`}>{contents[0]}</span>
            <span className={`is-${splits[1]}`}>{contents[1]}</span>
          </a>
        )
        ):(
        <a href={link ? link : "#"} className="nes-badge">
          <span className={badgeClass}>{contents[0]}</span>
        </a>
      )}
      </React.Fragment>
    );
  }
}
