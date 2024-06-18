const fetchProducts = async () => {
    const response = await fetch('src/data/produtos.json')
    const data = await response.json()

    return data.products
}

export default fetchProducts