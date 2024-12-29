import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"
import Accountreducer from "./features/accounts/AccountSlice"
import customerReducer from "./features/customers/customerSlice"


const rootReducer = combineReducers({ account: Accountreducer, customer: customerReducer })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store