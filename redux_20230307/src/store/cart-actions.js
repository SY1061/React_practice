/*
  Thunk. 원래는 dispatch 메소드에 직접 액션 객체를 전달하는 방식이었으나 thunk 이용 시 함수를 dispatch 할 수 있다는 장점.
  이때 이 함수를 thunk 라고 부름.
 */
import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/cart', {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();
      console.log(data);
      return data;
    }
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!'
        })
      )
    }
  }
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // 데이터 알림 요청 dispatch.
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      })
    )

    const sendRequest = async () => {
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
    }

    try {
      await sendRequest();

      // 성공했을시 알람.
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error
        })
      )
    }
  };
};