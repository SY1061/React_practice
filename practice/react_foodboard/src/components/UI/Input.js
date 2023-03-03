import styles from './Input.module.css';
import {forwardRef} from "react";

/*
    사용자 컴포넌트에서 ref 쓰고 싶다면 전체를 forwardRef 이용해서 감쌀 것!
 */
const Input = forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/*props.input 자체에 id가 존재하므로 input id={}를 생략해도 무방.*/}
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;