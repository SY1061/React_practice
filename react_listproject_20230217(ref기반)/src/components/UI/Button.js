import styles from './Button.module.css'
const Button = props => {
    return (
        /*
            값이 지정되지 않았을 경우에는 명시적으로 button 값이라고 하기 위한 or 구절.
         */
        <button
            className={styles.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;