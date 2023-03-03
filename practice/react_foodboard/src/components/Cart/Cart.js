import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

/*
    상단의 카트 버튼을 눌렀을 때 나오는 부분. Modal.js 로 타고 들어가면서 backdrop 창이 나온다.
 */
const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = item => {
        cartCtx.addItem(item);
    }
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const orderHandler = () => {
        setIsCheckout(current => !current);
    }

    const cartItems =
        <ul className={styles['cart-items']}>{
            cartCtx.items.map(item =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    // bind() 는 메서드에 들어갈 값을 사전에 지정 가능.
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            )}
        </ul>;

    const modalActions =
        <div className={styles.actions}>
            <button className={styles['button-alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
        </div>

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={orderHandler}/>}
            {!isCheckout && modalActions}
        </Modal>
    );
}

export default Cart;