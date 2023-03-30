export enum FilterActionTypes {
  SET_SUBJECT_FILTER = 'SET_SUBJECT_FILTER',
  SET_LANGUAGE_FILTER= 'SET_LANGUAGE_FILTER',
  SET_TITLE_FILTER= 'SET_TITLE_FILTER',
  SET_AUTHOR_FILTER= 'SET_AUTHOR_FILTER',
}

export interface FiltersState {
  subjects: string[],
  languages: string[],
  subjectFilter: string[],
  languageFilter: string,
  titleFilter: string,
  authorFilter: string,
}

interface SetSubjectFilterAction {
  type: FilterActionTypes.SET_SUBJECT_FILTER;
  subjectFilter: string[];
}
interface SetLanguageFilterAction {
  type: FilterActionTypes.SET_LANGUAGE_FILTER;
  languageFilter: string;
}

interface SetTitleFilterAction {
  type: FilterActionTypes.SET_TITLE_FILTER;
  titleFilter: string;
}

interface SetAuthorFilterAction {
  type: FilterActionTypes.SET_AUTHOR_FILTER;
  authorFilter: string;
}

export type FilterAction = SetSubjectFilterAction | SetLanguageFilterAction | SetTitleFilterAction | SetAuthorFilterAction;