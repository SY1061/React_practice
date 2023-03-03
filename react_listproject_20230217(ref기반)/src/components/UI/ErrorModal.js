import Card from "./Card";
import Button from "./Button";
import styles from './ErrorModal.module.css'
import React from "react";
import ReactDOM, {createPortal} from "react-dom";

/*
    포털 공부. createPortal();
    예제처럼 작은 경우에는 렌더링 됐을 때 확인이 가능하나
    큰 앱에선 매우 깊은 곳에서 생겨날 수도 있음. 그러면 확인이 어렵다..
    이런 백드롭 div 같은 경우 다른 위치에서 렌더링 시키고 싶을 때도 있을 것. 그것을 위한 기능을 해주는 것이 포털.
    사실 쓰는 법은 이해했으나 왜 쓰는지는 모르겠음..아직은?
 */

/*
    다른 곳에 분리할 수도 있으나 이 프로젝트에서는 여기서만 쓰이기 때문에 동일한 js파일 내부에 컴포넌트를 여러 개 넣어놓았음.
 */
const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
}

const ModalOverlay = props => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>

            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
}
const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root'))}

            {createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
                document.getElementById('overlay-root'))}
        </React.Fragment>
    );
}

export default ErrorModal;