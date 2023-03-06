import {configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// 지금은 slice가 1개라서 이렇게 쓰나 많아질 경우에는 reducer : {} 처럼 객체를 만듬.
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;