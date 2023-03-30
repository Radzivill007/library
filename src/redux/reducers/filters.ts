import { FiltersState, FilterActionTypes, FilterAction } from '../types'

const initialState: FiltersState = {
  subjects: ['horror', 'music', 'fashion', 'fantasy', 'magic'],
  languages: ['rus', 'eng', 'fre', 'spa', 'ger'],
  subjectFilter: [],
  languageFilter: '',
  titleFilter: '',
  authorFilter: '',
}

export const filtersReducer = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case FilterActionTypes.SET_SUBJECT_FILTER:
      return { ...state, subjectFilter: action.subjectFilter }
    case FilterActionTypes.SET_LANGUAGE_FILTER:
      return { ...state, languageFilter: action.languageFilter }
    case FilterActionTypes.SET_TITLE_FILTER:
      return { ...state, titleFilter: action.titleFilter }
    case FilterActionTypes.SET_AUTHOR_FILTER:
      return { ...state, authorFilter: action.authorFilter }
    default:
      return state
  }
}
