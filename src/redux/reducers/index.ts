import { combineReducers } from 'redux'
import { cardsReducer } from './cards'
import { filtersReducer } from './filters'
import { paginationReducer } from './pagination'

const rootReducer = combineReducers({
  cards: cardsReducer,
  filters: filtersReducer,
  pagination: paginationReducer,
})

export default rootReducer
