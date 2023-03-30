export enum PaginationActionTypes {
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
  SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE',
}

export interface PaginationState {
  currentPage: number,
  totalPages: number,
  itemsPerPage: number,
}

interface SetCurrentPageAction {
  type: PaginationActionTypes.SET_CURRENT_PAGE;
  currentPage: number;
}
interface SetTotalPagesAction {
  type: PaginationActionTypes.SET_TOTAL_PAGES;
  totalPages: number;
}

interface SetItemsPerPageAction {
  type: PaginationActionTypes.SET_ITEMS_PER_PAGE;
  itemsPerPage: number;
}

export type PaginationAction = SetCurrentPageAction | SetTotalPagesAction | SetItemsPerPageAction;