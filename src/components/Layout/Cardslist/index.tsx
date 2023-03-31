import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/defineTyped'
import Card from '../../UI/Card'
import styles from './CardsList.module.scss'

const CardsList: FC = () => {
  const cards = useAppSelector((state) => state.cards.cards)
  const isCardsLoaded = useAppSelector((state) => state.cards.isCardsLoaded)

  return (
    <div className={styles.cardsWrapper}>
      <h1>Библиотека</h1>

      {!isCardsLoaded ? (
        <div className='loader-container'>
          <div className='loader'></div>
        </div>
      ) : cards.length ? (
        <div className={styles.cards}>
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      ) : (
        <div className={styles.noElements}>Нет подходящих книг...</div>
      )}
    </div>
  )
}

export default CardsList
