import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cardsReducer from './features/cards/slice'
import filtersReducer from './features/filters/slice'
import paginationReducer from './features/pagination/slice'

const rootReducer = combineReducers({
  cards: cardsReducer,
  filters: filtersReducer,
  pagination: paginationReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
