import styles from './Login.module.css';
import {useEffect, useState} from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = props => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    /*
    state 업데이트 함수는 기본적으로 리액트에 의해 절대 바뀌지 않기 때문에 useEffect deps 에서 생략해도 무방.
    키가 입력될 때마다 업데이트 하는 것은 좋지 않음. setTimeout 을 사용하여 일정 시간 이상 입력이 없을 때만 유효성 검사를 함.
     */
    useEffect(() => {
        console.log('Checking form validity!');
        const identifier = setTimeout(() => {
            setFormIsValid(
                enteredEmail.includes('@') && enteredPassword.trim().length > 6
            );
        }, 500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(identifier);
        };
    }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    }

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    }

    const submitHandler = event => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    }

    return (
        <Card className={styles.login}>
            <form onSubmit={submitHandler}>
                <div className={`${styles.control} ${emailIsValid === false ? styles.invalid : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div className={`${styles.control} ${passwordIsValid === false ? styles.invalid : ''}`}>
                    <label>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={styles.actions}>
                    <Button type="submit" disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default Login;