import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'
import './ProductPage.css'
import Header from '../Header/Header'

const ProductPage = () => {
  const { id } = useParams()
  const { products, cartItems, setCartItems } = useContext(AppContext)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === parseInt(id, 10))
    setProduct(foundProduct)
  }, [id, products])

  const handleAddCart = () => {
    const newItem = { ...product, uniqueId: Date.now() + Math.random() }
    setCartItems([...cartItems, newItem])
  }

  if (!product) return <p>Produto não encontrado</p>

  return (
    <>
      <Header />
      <section className="product-page">
        <div className="product-page__info">
          <h2>{product.name}</h2>
          <p>{formatCurrency(product.price, 'BRL')}</p>
          <button type="button" onClick={handleAddCart}>Adicionar ao Carrinho</button>
        </div>
      </section>
    </>
  )
}

export default ProductPage