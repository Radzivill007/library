import { FilterActionTypes } from '../types'

export const setSubjectFilter = (subjectFilter: string[]) => {
  return { type: FilterActionTypes.SET_SUBJECT_FILTER, subjectFilter: subjectFilter }
}

export const setLanguageFilter = (languageFilter: string) => {
  return { type: FilterActionTypes.SET_LANGUAGE_FILTER, languageFilter: languageFilter }
}

export const setTitleFilter = (titleFilter: string) => {
  return { type: FilterActionTypes.SET_TITLE_FILTER, titleFilter: titleFilter }
}

export const setAuthorFilter = (authorFilter: string) => {
  return { type: FilterActionTypes.SET_AUTHOR_FILTER, authorFilter: authorFilter }
}
