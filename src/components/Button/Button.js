import React from 'react';

import { BasicButton } from './Button.css';

function Button({ content, position }) {
    return (
        <BasicButton position={position}>{content}</BasicButton>
    );
}

export default Button;
