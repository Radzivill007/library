import React, { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { getCards, setCardsLoaded, setCurrentPage } from '../redux/actions'
import { CardsState, FiltersState, PaginationState } from '../redux/types'

const Pagination = () => {
  const isCardsLoaded = useSelector((state: CardsState) => state.isCardsLoaded)

  const subjectFilter = useSelector((state: FiltersState) => state.subjectFilter)
  const languageFilter = useSelector((state: FiltersState) => state.languageFilter)
  const titleFilter = useSelector((state: FiltersState) => state.titleFilter)
  const authorFilter = useSelector((state: FiltersState) => state.authorFilter)

  const currentPage = useSelector((state: PaginationState) => state.currentPage)
  const totalPages = useSelector((state: PaginationState) => state.totalPages)
  const itemsPerPage = useSelector((state: PaginationState) => state.itemsPerPage)


  const dispatch = useDispatch()
 
  useEffect(() => {
    if (!isCardsLoaded) {
      dispatch(
        getCards({
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

  const onPageChange = (event: { selected: number }) => {
    dispatch(setCardsLoaded(false))
    dispatch(setCurrentPage(event.selected + 1))
  }

  return (
    <ReactPaginate
      pageCount={totalPages}
      onPageChange={onPageChange}
      forcePage={currentPage - 1}
      containerClassName={'pagination'}
      activeClassName={'active'}
      marginPagesDisplayed={0}
      pageRangeDisplayed={0}
      nextLabel=' >'
      previousLabel='<'
      previousLinkClassName='pagin'
      nextLinkClassName='pagin'
      disabledLinkClassName='disable'
    />
  )
}

export default Pagination
