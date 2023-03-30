import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Card as BootstrapCard } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { languageToRussian } from '../helpers/languageToRussian'
import { FiltersState, CardProps } from '../redux/types'

const Card: FC<CardProps> = ({ ...card }) => {
  const subjectFilter = useSelector((state: FiltersState) => state.subjectFilter)
  return (
    <Link to={`/book/${card.title}`}>
      <BootstrapCard key={card.title} className='mb-3'>
        <BootstrapCard.Body>
          <BootstrapCard.Title>{card.title}</BootstrapCard.Title>
          <div>
            {card.subject && <span>Жанры:</span>}
            {card.subject?.map((subject) => (
              <span
                style={{
                  display: 'inline-block',
                  margin: '0 5px',
                  fontSize: '14px',
                  background: subjectFilter.filter((sf) => subject.toLowerCase().includes(sf.toLowerCase())).length && 'gray',
                }}
              >
                {subject + ','}
              </span>
            ))}
          </div>
          <div>
            {card.language && <span>Языки:</span>}
            {card.language?.map((language) => (
              <span
                style={{
                  display: 'inline-block',
                  margin: '0 5px',
                  fontSize: '14px',
                }}
              >
                {languageToRussian(language) + ','}
              </span>
            ))}
          </div>
        </BootstrapCard.Body>
      </BootstrapCard>
    </Link>
  )
}

export default Card
