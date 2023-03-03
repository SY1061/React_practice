/*
    jsx 요구 사항에 의해 return 시 하나의 component 만을 반환하기에 <div>를 이용했었으나 앱이 커질 시 많은 <div>를 사용하는 문제 발생.
    따라서 아무런 기능을 수행하지 않으나 감싸는 것만을 위한 component 를 사용하여 눈속임을 함으로써 해결.
 */
const Wrapper = props => {
    return props.children;
}

export default Wrapper;