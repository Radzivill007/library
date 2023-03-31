import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/defineTyped'
import { languageToRussian } from '../../helpers/languageToRussian'

import styles from './DetailPage.module.scss'

function DetailPage() {
  const { title } = useParams()
  const cards = useAppSelector((state) => state.cards.cards)
  const book = cards?.find((p) => p.title === title)

  return (
    <div className={styles.detail}>
      <Link to='/' className={styles.goGome}>
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 7L13 7M1 7L7.36364 1M1 7L7.36364 13' stroke='#F2F2F2' />
        </svg>

        <span>Вернуться</span>
      </Link>
      <h1>Книга: {book?.title}</h1>
      <h2>Автор: {book?.author_name}</h2>
      <p>
        <span className={styles.gray}>Год издания: </span>
        {book?.first_publish_year}
      </p>
      <p>
        {book?.subject?.length && <span className={styles.gray}>Жанры: </span>}
        {book?.subject?.map((sub, index) => (
          <span key={sub}>{sub + (index < book.language!.length - 1 ? ', ' : '.')}</span>
        ))}
      </p>
      <p>
        {book?.language?.length && <span className={styles.gray}>Языки: </span>}
        {book?.language?.map((lang, index) => (
          <span key={lang}>{languageToRussian(lang) + (index < book.language!.length - 1 ? ', ' : '.')}</span>
        ))}
      </p>
    </div>
  )
}

export default DetailPage
