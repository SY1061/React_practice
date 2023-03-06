import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

/*
createSlice를 사용하여 reducer 사용.
 */
const counterSlice = createSlice({
    name: 'counter',
    initialState : initialCounterState,
    reducers: {
        increment(state) {
            // 여전히 기존 상태를 바꾸는 것은 아님.
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

/*
// 기본적인 reducer 사용. 코드가 너무 길어지는 단점 존재.
const counterReducer = (state = initialState, action) => {
    if(action.type === INCREMENT) {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
};
 */

// 메서드 이름과 같다면 자동으로 action key 를 생성시켜 줌.
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;