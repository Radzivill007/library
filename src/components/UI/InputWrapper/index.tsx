import React, { ReactNode } from 'react'
import styles from './InputWrapper.module.scss'

interface DropdownProps {
  label: string
  children: ReactNode
}

const Dropdown: React.FC<DropdownProps> = ({ label, children }) => {


  return (
    <>
      <div className={styles.label}>{label}</div>
      <div>{children}</div>
    </>
  )
}

export default Dropdown
