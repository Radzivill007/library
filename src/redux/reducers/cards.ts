import { CardsState, CardActionTypes, CardAction } from '../types'

const initialState: CardsState = {
  cards: [],
  isCardsLoaded: false,
}

export const cardsReducer = (state = initialState, action: CardAction) => {
  switch (action.type) {
    case CardActionTypes.CARDS:
      return { ...state, cards: action.cards }
    case CardActionTypes.SET_CARDS_LOADED:
      return { ...state, isCardsLoaded: action.isCardsLoaded }
    default:
      return state
  }
}
