import { PaginationActionTypes } from '../types'

export const setCurrentPage = (currentPage: number) => {
  return { type: PaginationActionTypes.SET_CURRENT_PAGE, currentPage: currentPage }
}

export const setTotalPages = (totalPages: number) => {
  return { type: PaginationActionTypes.SET_CURRENT_PAGE, totalPages: totalPages }
}

export const setItemsPerPage = (itemsPerPage: number) => {
  return { type: PaginationActionTypes.SET_CURRENT_PAGE, itemsPerPage: itemsPerPage }
}
