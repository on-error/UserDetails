import React from 'react'
import './Input.css';

const Input = ({
  labelText,
  labelClass,
  className,
  errorText,
  isReadonly,
  ...restProps
}) => {
  return (
    <div className="input">
    {labelText && (
    <div
      className={`label ${errorText && 'error'} ${labelClass}`}
    >
      {labelText}
    </div>
    )}
    <>
      <input
        autoComplete="off"
        className={`input-box ${
          errorText && 'error-border'
          } ${className}`}
        {...restProps}
      />
      {errorText && <span className="input-error">{errorText}</span>}
    </>
  </div>
  )
}

export default Input