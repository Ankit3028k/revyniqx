import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import "../../assets/css/styles.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  error?: string;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  id,
  label,
  icon,
  className = '',
  error,
  fullWidth = false,
  variant = 'outlined',
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div 
      className={`${styles.inputContainer} ${fullWidth ? styles.fullWidth : ''} ${className}`}
      data-variant={variant}
      data-error={!!error}
    >
      <div className={styles.inputWrapper}>
        {icon && <i className={`${icon} ${styles.icon}`} aria-hidden="true" />}
        <input
          id={inputId}
          ref={ref}
          className={`${styles.input} ${error ? styles.error : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {props.required && <span className={styles.required} aria-hidden="true">*</span>}
          </label>
        )}
      </div>
      {error && (
        <div id={`${inputId}-error`} className={styles.errorMessage} role="alert">
          {error}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;