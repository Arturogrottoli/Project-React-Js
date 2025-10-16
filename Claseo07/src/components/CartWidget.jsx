import { Link } from "react-router-dom";
import { useCart } from "../context/cartcontext";

export default function CartWidget() {
  const { totalQty } = useCart();
  return (
    <Link to="/cart" aria-label="Carrito"
      style={{ position:'relative', display:'inline-flex', alignItems:'center', gap:6, padding:'6px 10px', borderRadius:12, background:'#1a1d24' }}>
      <span role="img" aria-label="carrito">🛒</span>
      <span>{totalQty}</span>
    </Link>
  );
}
