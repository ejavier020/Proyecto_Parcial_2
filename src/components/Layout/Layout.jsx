import { Link, Outlet } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Layout.scss';

const Layout = () => {
  const { cart } = useCart();

  return (
    <div className="layout">
      <nav className="navbar">
        <Link to="/" className="logo">Tienda</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Productos</Link>
          <Link to="/cart" className="cart-link">
            🛒 Carrito {cart.length > 0 && <span>({cart.length})</span>}
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;