import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProductList.scss'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="loading">Cargando productos...</div>

  return (
    <div className="product-list">
      <h1>Catálogo de Productos</h1>
      <div className="grid-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="details-btn">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList