import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";

// 시작할 시 빈 장바구니를 서버로 보내지 않게 하는 변수.
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  console.log(cart);

  useEffect(() => {
    const sendCartData = async () => {
      // 데이터 알림 요청 dispatch.
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }))
      const response = await fetch(
        'http://localhost:8080/cart',
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(cart)
        }
      )

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
      // 성공했을시 알람.
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    };

    // 처음 시작할 때만 작동하는 구조. 다시는 true가 될 수 없으니까
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error
        })
      )
    });
  },[cart, dispatch])

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
