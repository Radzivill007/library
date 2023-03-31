import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/defineTyped'
import { languageToRussian } from '../../helpers/languageToRussian'
import { CardProps } from '../../features/cards/types'
import styles from './Card.module.scss'

const Card: FC<CardProps> = ({ ...card }) => {
  const subjectFilter = useAppSelector((state) => state.filters.subjectFilter)
  const languageFilter = useAppSelector((state) => state.filters.languageFilter)

  return (
    <Link to={`/book/${card.title}`} className={styles.card}>
      <h3 className={styles.title}>{card.title}</h3>
      <div className={styles.desc}>
        {card.subject && <span className={styles.gray}>Жанры: </span>}
        {card.subject?.map((subject, index) => (
          <span key={subject}>
            <span
              style={{
                fontSize: '14px',
                background: subjectFilter.filter((sf) => subject.toLowerCase().includes(sf.toLowerCase())).length && 'gray',
              }}
            >
              {subject}
            </span>
            {index < card.subject!.length - 1 ? ', ' : '.'}
          </span>
        ))}
      </div>
      <div className={styles.desc}>
        {card.language && <span className={styles.gray}>Языки: </span>}
        {card.language?.map((language, index) => (
          <span key={language}>
            <span
              style={{
                fontSize: '14px',
                background: languageFilter.includes(language) ? 'gray' : '',
              }}
            >
              {languageToRussian(language)}
            </span>
            {index < card.language!.length - 1 ? ', ' : '.'}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default Card
