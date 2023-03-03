import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import {useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

/*
    매번 state를 업데이트하기에는 불필요할 때가 존재함.
    이 예시도 입력하는 것만으로 계속해서 state를 쓸 이유가 없음.
    그래서 ref를 사용.
 */
const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        /*
            addUserHandler 실행하게 되면 기본 값을 설정안했음에도 연결되어 값이 들어가져 있음.
         */
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        // +를 추가하면 문자열을 number 취급.
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;