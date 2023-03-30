import axios from 'axios'
import { GetCardsActionTypes } from '../types'

export const fetchBooks = async ({ limit, page, subjects, title, author, language }: GetCardsActionTypes) => {
  let queryUrl = `https://openlibrary.org/search.json?q=*&fields=title,subject,author_name,language,first_publish_year&limit=${limit}&page=${page}`
  if (subjects?.length) queryUrl += `&subject=${subjects.join(',')}`
  if (title) queryUrl += `&title=${title}`
  if (author) queryUrl += `&author=${author}`
  if (language) queryUrl += `&language=${language}`

  try {
    const response = await axios.get(queryUrl)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
