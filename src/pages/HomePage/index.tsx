import React, { useEffect } from 'react'

import CardsList from '../../components/Layout/Cardslist'
import Filters from '../../components/Layout/Filters'
import Pagination from '../../components/Layout/Pagination'
import { useAppDispatch, useAppSelector } from '../../hooks/defineTyped'

import { fetchBooks } from '../../features/api'

import styles from './IndexPage.module.scss'

function HomePage() {
  const isCardsLoaded = useAppSelector((state) => state.cards.isCardsLoaded)

  const subjectFilter = useAppSelector((state) => state.filters.subjectFilter)
  const languageFilter = useAppSelector((state) => state.filters.languageFilter)
  const titleFilter = useAppSelector((state) => state.filters.titleFilter)
  const authorFilter = useAppSelector((state) => state.filters.authorFilter)

  const currentPage = useAppSelector((state) => state.pagination.currentPage)
  const itemsPerPage = useAppSelector((state) => state.pagination.itemsPerPage)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!isCardsLoaded) {
      dispatch(
        fetchBooks({
          limit: itemsPerPage,
          page: currentPage,
          subjects: subjectFilter,
          title: titleFilter,
          author: authorFilter,
          language: languageFilter,
        })
      )
    }
  }, [dispatch, isCardsLoaded, itemsPerPage, currentPage, subjectFilter, titleFilter, authorFilter, languageFilter])

  return (
    <div className={styles.home}>
      <div>
        <CardsList />
        <Pagination />
      </div>
      <Filters />
    </div>
  )
}

export default HomePage
