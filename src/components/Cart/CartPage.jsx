import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartPage.scss';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>No hay productos en el carrito</p>
          <Link to="/" className="shop-btn">Ver productos</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>Precio unitario: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div className="total-section">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button className="checkout-btn">Finalizar compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;