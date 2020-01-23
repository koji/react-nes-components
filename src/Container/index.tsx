import * as React from 'react';
import '../assets/nes.css';

type Props = {
  containerTitle?: string;
  isCentered?: boolean;
  isRounded?: boolean;
  darkMode?: boolean;
  content: string;
};

export class NesContainer extends React.Component<Props> {
  render() {
    const {
      containerTitle,
      isCentered,
      isRounded,
      darkMode,
      content,
    } = this.props;
    let containerClass = 'nes-container';
    containerClass = containerTitle
      ? `${containerClass} with-title`
      : `${containerClass}`;

    containerClass = isCentered
      ? `${containerClass} is-centered`
      : `${containerClass}`;

    containerClass = isRounded
      ? `${containerClass} is-rounded`
      : `${containerClass}`;

    containerClass = darkMode
      ? `${containerClass} is-dark`
      : `${containerClass}`;
    return (
      <div className={containerClass}>
        {containerTitle && <p className="title">{containerTitle}</p>}
        <p>{content}</p>
      </div>
    );
  }
}
