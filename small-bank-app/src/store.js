import { combineReducers, createStore } from "redux"
import Accountreducer from "./features/accounts/AccountSlice"
import customerReducer from "./features/customers/customerSlice"

const rootReducer = combineReducers({ account: Accountreducer, customer: customerReducer })

const store = createStore(rootReducer)

export default store