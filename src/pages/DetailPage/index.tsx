import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { languageToRussian } from '../../helpers/languageToRussian'
import { CardsState } from '../../redux/types'

function DetailPage() {
  const { title } = useParams()
  const cards = useSelector((state: CardsState) => state.cards)
  const book = cards?.find((p) => p.title === title)
  const navigate = useNavigate()

  return (
    <Container>
      <button onClick={() => navigate(-1)}>back</button>
      <Link to='/'>Back to Home</Link>
      <h1 className='mb-3'>Книга: {book?.title}</h1>
      <h2 className='mb-3'>Автор: {book?.author_name}</h2>
      <p className='lead'>Год издания {book?.first_publish_year}</p>
      <p>
        Жанры:&nbsp;
        {book?.subject?.map((sub: string) => (
          <span className='text-muted'>{sub + ', '}</span>
        ))}
      </p>
      <p>
        Языки:&nbsp;
        {book?.language?.map((lang: string) => (
          <span className='text-muted'>{languageToRussian(lang) + ', '}</span>
        ))}
      </p>
    </Container>
  )
}

export default DetailPage
