import { PaginationState, PaginationAction, PaginationActionTypes } from '../types'

const initialState: PaginationState = {
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 10,
}

export const paginationReducer = (state = initialState, action: PaginationAction) => {
  switch (action.type) {
    case PaginationActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case PaginationActionTypes.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.totalPages }
    case PaginationActionTypes.SET_ITEMS_PER_PAGE:
      return { ...state, itemsPerPage: action.itemsPerPage }
    default:
      return state
  }
}
