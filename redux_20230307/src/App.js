import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  console.log(cart);
  useEffect(() => {
    fetch('http://localhost:8080/cart', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(cart)
    });
  },[cart])

  return (
      <Layout>
        { showCart && <Cart /> }
        <Products />
      </Layout>
  );
}

export default App;
