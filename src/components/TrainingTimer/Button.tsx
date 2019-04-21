import React from 'react';

import { IButton } from './interfaces';

const Button = ({ children, disabled, onClick }: IButton) => (
  <button
    type="button"
    className="btn btn-success" 
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;