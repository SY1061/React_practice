import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    // reduce 두번째 인자는 초기값.
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0);

    useEffect(() => {
        if (items.length === 0 ){
            return;
        }
        setBtnIsHighlighted(true);
        // Css 설정이 300ms로 설정되어있음.
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    /*
        여기서 Your Cart 버튼을 누르게 되면 onClick 이벤트로 인해 App.js 에 존재하는 set 상태가 true 상태가 되면서 Cart.js 부분을
        보여주게 됨.
     */
    return (
        <button className={btnStyles} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;