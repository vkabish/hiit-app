import React from 'react';

import { IEditorInput } from './interfaces';

const EditorInput = ({ 
  className, 
  label, 
  name,  
  value, 
  type, 
  onChange, 
  message = '',
  step 
}: IEditorInput) => (
  <p className={`editor-input ${className}`}>
    {label && 
      <label className="editor-input__label">
        {label}
      </label>
    }
    <input
      className="editor-input__input" 
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange} 
      step={step}
    />
    {message && 
      <span className="editor-input__message">
        {message}
      </span>
    }
  </p>
);

export default EditorInput;