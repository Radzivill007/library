import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchBooks } from '../api'
import { CardsState } from './types'

const initialState: CardsState = {
  cards: [],
  isCardsLoaded: false,
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardsLoaded(state, action: PayloadAction<boolean>) {
      state.isCardsLoaded = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.cards = action.payload.docs
      state.isCardsLoaded = true
    })
  },
})

export const { setCardsLoaded } = cardsSlice.actions
export default cardsSlice.reducer
