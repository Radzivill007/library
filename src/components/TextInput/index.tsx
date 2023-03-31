import React, { FC, InputHTMLAttributes } from 'react'
import styles from './TextInput.module.scss'

const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <input className={styles.input} {...props} />
}

export default TextInput
