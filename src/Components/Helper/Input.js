import React from 'react';

import styles from '../../Styles/Helper/Input.module.css';

const Input = ({ label, type, max, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        autoComplete="off"
        max={max}
        maxLength={max}
        id={name}
        name={name}
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
