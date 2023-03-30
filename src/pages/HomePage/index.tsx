import React from 'react'
import { Container } from 'react-bootstrap'

import CardsList from '../../components/CardsList'
import Filters from '../../components/Filters'

import { useSelector } from 'react-redux'
import { PaginationState } from '../../redux/types'

function HomePage() {
  const totalPages = useSelector((state: PaginationState) => state.totalPages)

  return (
    <Container>
      <h1>Библиотека</h1>
      <p> {totalPages}</p>
      <div className='d-flex justify-content-between' style={{ gap: '100px' }}>
        <div className='card-list mt-5'>
          <CardsList />
        </div>
        <Filters />
      </div>
    </Container>
  )
}

export default HomePage
