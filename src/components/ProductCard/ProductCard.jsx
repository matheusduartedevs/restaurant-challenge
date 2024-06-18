import { BsFillCartPlusFill } from 'react-icons/bs'
import './ProductCard.css'

const ProductCard = ({ data }) => {
  return (
    <section className='product-card'>
      <img
        src=''
        alt="product"
        className="card__image"
      />

      <div className="card-infos">
        <h2 className="card-price">10</h2>
        <h2 className="card-title">Produto</h2>
      </div>

      <button
        type="button"
        className="button-add-cart"
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductCard