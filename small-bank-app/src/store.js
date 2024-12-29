import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"
import Accountreducer from "./features/accounts/AccountSlice"
import customerReducer from "./features/customers/customerSlice"
import reducer from "./features/accounts/AccountSlice"

import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        account: Accountreducer,
        customer: customerReducer
    }
})

export default store