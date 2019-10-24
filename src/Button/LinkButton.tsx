import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const LinkButton: React.FC<LinkProps> = props => {
  return <Link {...props} />;
};

export default LinkButton;