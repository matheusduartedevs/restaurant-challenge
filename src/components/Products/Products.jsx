import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'

const Products = () => {
    const { products, setProducts } = useState([])

    return (
        <section className='products container'>
            {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </section>
    )
}

export default Products