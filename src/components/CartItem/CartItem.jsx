import { useContext } from 'react'
import { BsCartDashFill } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'
import propTypes from 'prop-types'
import AppContext from '../../context/AppContext'
import './CartItem.css'

const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext)
  const { id, image, name, price } = data

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id)
    setCartItems(updatedItems)
  }

  return (
    <section className="cart-item">
      <img src={image}
        alt="imagem do produto"
        className='cart-item-image'
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{name}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button-remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  )
}

export default CartItem

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;