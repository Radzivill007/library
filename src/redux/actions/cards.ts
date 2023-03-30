import { Dispatch, AnyAction } from 'redux'

import { ThunkAction } from 'redux-thunk'
import { fetchBooks } from '../api/fetchBooks'
import { CardAction, PaginationAction, CardActionTypes, PaginationActionTypes, GetCardsActionTypes } from '../types'

export const getCards = ({ limit, page, subjects, title, author, language }: GetCardsActionTypes) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const data = await fetchBooks({ limit, page, subjects, title, author, language })
      dispatch({ type: CardActionTypes.CARDS, cards: data.docs })
      dispatch({ type: CardActionTypes.SET_CARDS_LOADED, isCardsLoaded: true })
      dispatch({ type: PaginationActionTypes.SET_TOTAL_PAGES, totalPages: Math.floor(data.numFound / limit) + 1 })
    } catch (error) {
      console.error(error)
    }
  }
}
export const setCardsLoaded = (loaded: boolean) => {
  return { type: CardActionTypes.SET_CARDS_LOADED, isCardsLoaded: loaded }
}
