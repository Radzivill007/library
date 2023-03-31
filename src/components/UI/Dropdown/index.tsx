import React, { useState, useEffect, useRef, ReactNode } from 'react'
import styles from './Dropdown.module.scss'

interface DropdownProps {
  count?: number
  children: ReactNode
}

const Dropdown: React.FC<DropdownProps> = ({ count, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  const handleHeaderClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={`${styles.header} ${isOpen ? styles.open : styles.closed}`} onClick={handleHeaderClick}>
        <div>{count ? `Выбрано: ${count}` : ''}</div>
        <svg className={styles.arrow} width='16' height='9' viewBox='0 0 16 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M15 7.99998L7.99998 1L1 7.99998' stroke='#F2F2F2' />
        </svg>
      </div>
      <div className={`${styles.options} ${isOpen ? styles.open : styles.closed}`}>{children}</div>
    </div>
  )
}

export default Dropdown
