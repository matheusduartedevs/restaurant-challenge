import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Provider from './context/Provider'
import Cart from './components/Cart/Cart'
import ProductPage from './components/ProductPage/ProductPage'

const App = () => {
  return (
    <Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Cart />
      </Router>
    </Provider>
  )
}

export default App