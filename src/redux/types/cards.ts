export enum CardActionTypes {
  CARDS = 'CARDS',
  SET_CARDS_LOADED = 'SET_CARDS_LOADED',
  SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
}

export interface CardProps {
  title?: string
  author_name?: string
  language?: string[]
  subject?: string[]
  first_publish_year: string | number
}

export interface CardsState {
  cards: CardProps[]
  isCardsLoaded: boolean
}

export interface GetCardsActionTypes {
  limit: number
  page: number
  subjects: string[]
  title: string
  author: string
  language: string
}

interface CardsAction {
  type: CardActionTypes.CARDS
  cards: CardProps[]
}

interface SetCardsLoadedAction {
  type: CardActionTypes.SET_CARDS_LOADED
  isCardsLoaded: boolean
}

export type CardAction = CardsAction | SetCardsLoadedAction
