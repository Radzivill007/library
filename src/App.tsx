import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import { Provider } from 'react-redux'
import store from './store'
import './App.scss'
import WebFont from 'webfontloader'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter:400,500,600,700', 'Roboto:400'],
      },
      active: () => setIsLoading(false),
      inactive: () => setIsLoading(false),
    })
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='loader-container'>
          <div className='loader'></div>
        </div>
      ) : (
        <Provider store={store}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/book/:title' element={<DetailPage />} />
          </Routes>
        </Provider>
      )}
    </div>
  )
}
