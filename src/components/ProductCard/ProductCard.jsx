import { useContext } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import './ProductCard.css'

const ProductCard = ({ data }) => {
  const { name, image, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCart = () => setCartItems([...cartItems, data])

  return (
    <section className='product-card'>
      <img
        src={image.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
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