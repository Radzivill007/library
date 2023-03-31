import React from 'react'
import ReactPaginate from 'react-paginate'
import { setCardsLoaded, setCurrentPage } from '../../features/shared/sharedSlice'

import { useAppSelector, useAppDispatch } from '../../hooks/defineTyped'

import styles from './Pagination.module.scss'

const Pagination = () => {
  const currentPage = useAppSelector((state) => state.pagination.currentPage)
  const totalPages = useAppSelector((state) => state.pagination.totalPages)

  const dispatch = useAppDispatch()

  const onPageChange = (event: { selected: number }) => {
    dispatch(setCardsLoaded(false))
    dispatch(setCurrentPage(event.selected + 1))
  }

  return (
    <ReactPaginate
      pageCount={totalPages}
      onPageChange={onPageChange}
      forcePage={currentPage - 1}
      containerClassName={styles.pagination}
      marginPagesDisplayed={0}
      pageRangeDisplayed={0}
      nextLabel=' >'
      previousLabel='<'
      previousLinkClassName={styles.link}
      nextLinkClassName={styles.link}
      disabledLinkClassName={styles.disabled}
    />
  )
}

export default Pagination
