import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FiltersState } from './types'

const initialState: FiltersState = {
  subjects: ['horror', 'music', 'fashion', 'fantasy', 'magic'],
  languages: ['rus', 'eng', 'fre', 'spa', 'ger'],
  subjectFilter: [],
  languageFilter: '',
  titleFilter: '',
  authorFilter: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSubjectFilter: (state, action: PayloadAction<string[]>) => {
      state.subjectFilter = action.payload
    },
    setLanguageFilter: (state, action: PayloadAction<string>) => {
      state.languageFilter = action.payload
    },
    setTitleFilter: (state, action: PayloadAction<string>) => {
      state.titleFilter = action.payload
    },
    setAuthorFilter: (state, action: PayloadAction<string>) => {
      state.authorFilter = action.payload
    },
  },
})

export const { setSubjectFilter, setLanguageFilter, setTitleFilter, setAuthorFilter } = filtersSlice.actions

export default filtersSlice.reducer
