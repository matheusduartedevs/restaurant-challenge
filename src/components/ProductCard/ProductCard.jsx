import { useContext } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import './ProductCard.css'

const ProductCard = ({ data }) => {
  const { name, image, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCart = () => {
    const newItem = {
      ...data,
      uniqueId: Date.now() + Math.random()
    }

    setCartItems([...cartItems, newItem])
  }

  return (
    <section className='product-card'>
      <img
        src={image}
        alt="product"
        className="card-image"
      />

      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card-title">{name}</h2>
      </div>

      <button
        type="button"
        className="button-add-cart"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductCard

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;