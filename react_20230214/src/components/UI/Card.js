// 사용자 정의 컴포넌트 예제.

import "./Card.css"
const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;