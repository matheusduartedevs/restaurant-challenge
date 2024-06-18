import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartButton.css'

const CartButton = () => {
  return (
    <button
      type="button"
      className='cart-button'
    >
      <AiOutlineShoppingCart />
    </button>
  )
}

export default CartButton