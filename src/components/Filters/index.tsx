import React, { useState, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/defineTyped'
import {
  setSubjectFilter,
  setLanguageFilter,
  setTitleFilter,
  setAuthorFilter,
  setCardsLoaded,
  setCurrentPage,
} from '../../features/shared/sharedSlice'
import { languageToRussian } from '../../helpers/languageToRussian'
import Dropdown from '../Dropdown'
import Checkbox from '../Checkbox'
import styles from './Filters.module.scss'
import TextInput from '../TextInput'
import InputWrapper from '../InputWrapper'

const Filters = () => {
  const [filterOpen, setFilterOpen] = useState(false)

  const dispatch = useAppDispatch()
  const subjects = useAppSelector((state) => state.filters.subjects)
  const languages = useAppSelector((state) => state.filters.languages)
  const subjectFilter = useAppSelector((state) => state.filters.subjectFilter)
  const languageFilter = useAppSelector((state) => state.filters.languageFilter)
  const titleFilter = useAppSelector((state) => state.filters.titleFilter)
  const authorFilter = useAppSelector((state) => state.filters.authorFilter)

  const subjectSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCardsLoaded(false))
    dispatch(setCurrentPage(1))
    dispatch(
      setSubjectFilter(
        subjectFilter.includes(e.target.value) ? subjectFilter.filter((i) => i !== e.target.value) : [...subjectFilter, e.target.value]
      )
    )
  }

  const languageSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCardsLoaded(false))
    dispatch(setCurrentPage(1))
    dispatch(setLanguageFilter(e.target.value))
  }

  const titleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCardsLoaded(false))
    dispatch(setCurrentPage(1))
    dispatch(setTitleFilter(e.target.value))
  }

  const authorSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCardsLoaded(false))
    dispatch(setCurrentPage(1))
    dispatch(setAuthorFilter(e.target.value))
  }

  return (
    <>
      <button className={styles.btnOpen} onClick={() => setFilterOpen(true)}>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M10 15L20 15' stroke='white' />
          <path d='M14 9L4 9' stroke='white' />
          <path d='M4 15L6 15' stroke='white' />
          <path d='M20 9L18 9' stroke='white' />
          <circle cx='8' cy='15' r='2' stroke='white' />
          <circle cx='3' cy='3' r='2' transform='matrix(-1 0 0 1 19 6)' stroke='white' />
        </svg>
        <span>Фильтры</span>
      </button>
      <div className={`${styles.filtersWrapper} ${filterOpen && styles.open}`}>
        <div className={styles.inner}>
          <button className={styles.btnClose} onClick={() => setFilterOpen(false)}>
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 7L13 7M1 7L7.36364 1M1 7L7.36364 13' stroke='#F2F2F2' />
            </svg>
          </button>
          <h2>Фильтры</h2>
          <InputWrapper label='Поиск по заголовку'>
            <TextInput onChange={titleSearch} value={titleFilter} />
          </InputWrapper>
          <InputWrapper label='Поиск по автору'>
            <TextInput onChange={authorSearch} value={authorFilter} />
          </InputWrapper>
          <InputWrapper label='Поиск по жанрам:'>
            <Dropdown count={subjectFilter.length}>
              {subjects?.map((subject) => (
                <Checkbox
                  key={subject}
                  type='checkbox'
                  label={subject}
                  value={subject}
                  checked={subjectFilter?.includes(subject)}
                  onChange={subjectSearch}
                />
              ))}
            </Dropdown>
          </InputWrapper>
          <InputWrapper label='Поиск по языку:'>
            {languages?.map((language) => (
              <Checkbox
                key={language}
                type='radio'
                label={languageToRussian(language)}
                value={language}
                onChange={languageSearch}
                checked={languageFilter === language}
              />
            ))}
          </InputWrapper>
        </div>
      </div>
    </>
  )
}

export default Filters
