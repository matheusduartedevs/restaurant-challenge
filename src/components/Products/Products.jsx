import React, { useContext, useEffect } from 'react'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'
import './Products.css'

const Products = () => {
    const { products, setProducts, loading, setLoading } = useContext(AppContext)

    useEffect(() => {
        fetchProducts().then((response) => {
            setProducts(response)
            setLoading(false)
        })
    }, [])

    return (
        (loading && <Loading />) || (
            <section className='products container'>
                {products.map((product) => <ProductCard key={product.id} data={product} />)}
            </section>
        )
    )
}

export default Products