import React, { FC, InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.scss'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox: FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <label className={styles.checkbox}>
      <input hidden type={props.type || 'checkbox'} {...props} />
      <span className={`${styles.checkmark} ${props.type === 'radio' && styles.radio}`}>
        <svg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 3.25L4.57143 7L11 1' stroke='#393C46' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </span>
      <span className={styles.label}>{label || props.value}</span>
    </label>
  )
}

export default Checkbox
