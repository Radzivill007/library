import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Pagination from './Pagination'
import { CardsState } from '../redux/types'

const CardsList: FC = () => {
  const cards = useSelector((state: CardsState) => state.cards)
  const isCardsLoaded = useSelector((state: CardsState) => state.isCardsLoaded)
  return (
    <div className='row'>
      {!isCardsLoaded ? (
        <div>Loading...</div>
      ) : cards.length ? (
        cards.map((card) => (
          <div key={card.title} className='col-12  mb-3'>
            <Card {...card} />
          </div>
        ))
      ) : (
        <div>Нет элементов</div>
      )}
      <div className='col-12'>
        <Pagination />
      </div>
    </div>
  )
}

export default CardsList
