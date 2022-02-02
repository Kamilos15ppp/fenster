import React from 'react';
import { Link } from 'react-router-dom';

import { BasicButton } from './Button.css';

function Button({ content, position, to }) {
  return (
    <Link to={to}>
      <BasicButton position={position}>{content}</BasicButton>
    </Link>
  );
}

export default Button;
