import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PaginationState } from './types'
import { fetchBooks } from '../api'

const initialState: PaginationState = {
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 10,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.totalPages = Math.floor(action.payload.numFound / state.itemsPerPage) + 1
    })
  },
})

export const { setCurrentPage, setTotalPages, setItemsPerPage } = paginationSlice.actions

export default paginationSlice.reducer
