import React from 'react';

import { IButton } from './interfaces';

const Button = ({ children, className, disabled, onClick }: IButton) => (
  <button
    type="button"
    className={`btn btn-success ${className || ''}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;