import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProductDetails.scss'
import { useCart } from '../../context/CartContext'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="loading">Cargando detalles...</div>

  return (
    <div className="product-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Volver
      </button>
      
      <div className="details-container">
        <div className="image-section">
          <img src={product.image} alt={product.title} />
        </div>
        
        <div className="info-section">
          <h1>{product.title}</h1>
          <p className="category">{product.category}</p>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <div className="rating">
            Valoración: {product.rating.rate} ⭐ ({product.rating.count} reseñas)
          </div>
        </div>
        <button 
  className="add-to-cart"
  onClick={() => addToCart(product)}
>
  🛍️ Agregar al carrito
</button>
      </div>
    </div>
  )
}

export default ProductDetails