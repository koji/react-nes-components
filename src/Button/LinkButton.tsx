import * as React from 'react';

type Props = {
  buttonType?: "primary" | "success" | "warning" | "error" | "disabled";
  link: string;
  label: string;
}

class NesLinkButton extends React.Component<Props> {
  render() {
    const { buttonType, link, label } = this.props;
    const buttonClass = buttonType
      ? `nes-btn is-${buttonType}`
      : `nes-btn`;

    return (
      <a className={buttonClass} href={link}>
        {label}
      </a>
    );
  }
};

export default NesLinkButton;