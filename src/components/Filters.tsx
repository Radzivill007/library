import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSubjectFilter, setLanguageFilter, setTitleFilter, setAuthorFilter, setCardsLoaded, setCurrentPage } from '../redux/actions'
import { languageToRussian } from '../helpers/languageToRussian'
import { FiltersState } from '../redux/types'
import { ChangeEvent } from 'react'

const Filters = () => {
  const dispatch = useDispatch()
  const subjects = useSelector((state: FiltersState) => state.subjects)
  const languages = useSelector((state: FiltersState) => state.languages)
  const subjectFilter = useSelector((state: FiltersState) => state.subjectFilter)
  const languageFilter = useSelector((state: FiltersState) => state.languageFilter)
  const titleFilter = useSelector((state: FiltersState) => state.titleFilter)
  const authorFilter = useSelector((state: FiltersState) => state.authorFilter)

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
    <div>
      <h3>Поиск по заголовку</h3>
      <input onChange={titleSearch} value={titleFilter} />
      <h3>Поиск по автору</h3>
      <input onChange={authorSearch} value={authorFilter} />
      <h3>Поиск по жанрам:</h3>
      <div>
        {subjects?.map((subject) => (
          <div key={subject}>
            <input type='checkbox' value={subject} onChange={subjectSearch} checked={subjectFilter?.includes(subject)} name='subject' />
            <label>{subject}</label>
          </div>
        ))}
      </div>
      <h3>Поиск по языку:</h3>
      <div>
        {languages?.map((language) => (
          <div key={language}>
            <input type='radio' value={language} onChange={languageSearch} checked={languageFilter === language} name='subject' />
            <label>{languageToRussian(language)}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
