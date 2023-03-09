import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";
import {configureStore} from "@reduxjs/toolkit";

// 시작할 시 빈 장바구니를 서버로 보내지 않게 하는 변수.
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  /*
    get, put 부분인데 db가 없을 땐 null 값을 가져오는 문제가 발생했었다. 그나마 put 부분을 if 문으로 막아놓으니 큰 문제까진 아니지만
    해결봐야 할 문제.
   */
  useEffect(() => {
    dispatch(fetchCartData());

  }, [dispatch])

  useEffect(() => {
    // 처음 시작할 때만 작동하는 구조. 다시는 true가 될 수 없으니까
    if (isInitial) {
      isInitial = false;
      return;
    }
    console.log(cart);
    if (cart.totalQuantity) {
      dispatch(sendCartData(cart));

    }
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
      }
      <Layout>
        {showCart && <Cart/>}
        <Products/>
      </Layout>
    </Fragment>
  );
}

export default App;
