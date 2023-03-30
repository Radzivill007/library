export const languageToRussian = (language: string) => {
  const rusLang = new Intl.DisplayNames('ru', { type: 'language' }).of(language) || language
  return rusLang?.charAt(0).toUpperCase() + rusLang?.slice(1)
}
