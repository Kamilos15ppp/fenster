import React from 'react';
import { Link } from 'react-router-dom';

import { BasicButton } from './Button.css';

function Button({ content, to }) {
  return (
    <Link to={to}>
      <BasicButton>{content}</BasicButton>
    </Link>
  );
}

export default Button;
