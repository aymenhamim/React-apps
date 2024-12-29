import { combineReducers, createStore } from "redux"


const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
}

const initialStateCustomer = {
    fullName: '',
    nationalId: '',
    createdAt: ''
}

function Accountreducer(state = initialStateAccount, action) {
    switch (action.type) {
        case 'account/deposit':
            return { ...state, balance: state.balance + action.payload }

        case 'account/withdraw':
            return { ...state, balance: state.balance - action.payload }

        case 'account/requestLoan':
            if (state.loan > 0) return state
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.loanPurpose,
                balance: state.balance + action.payload.amount
            }

        case 'account/payLoan':
            return {
                ...state,
                loan: 0,
                loanPurpose: '',
                balance: state.balance - state.loan
            }

        default:
            return state;
    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {

        case 'customer/createCustomer':
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalId: action.payload.nationalId,
                createdAt: action.payload.createdAt
            }
        case 'customer/updateName':
            return { ...state, fullName: action.payload }

        default:
            return state
    }
}

const rootReducer = combineReducers({ account: Accountreducer, customer: customerReducer })

const store = createStore(rootReducer)

// store.dispatch({ type: 'account/deposit', payload: 1000 })
// store.dispatch({ type: 'account/withdraw', payload: 1 })
// console.log(store.getState())
// store.dispatch({ type: 'account/requestLoan', payload: { amount: 400, loanPurpose: 'baghi nchri gha clavier' } })
// console.log(store.getState())
// store.dispatch({ type: 'account/payLoan' })
// console.log(store.getState())

function deposit(amount) {
    return { type: 'account/deposit', payload: amount }
}
function withdraw(amount) {
    return { type: 'account/withdraw', payload: amount }
}
function requestLoan(amount, purpose) {
    return { type: 'account/requestLoan', payload: { amount: amount, loanPurpose: purpose } }
}
function payLoan() {
    return { type: 'account/payLoan' }
}

store.dispatch(deposit(1000))
store.dispatch(withdraw(1))
store.dispatch(requestLoan(420, 'baghi nchri gha clavier'))
store.dispatch(payLoan())
console.log(store.getState())

function createCustomer(fullName, nationalId) {
    return { type: "customer/createCustomer", payload: { fullName, nationalId, createdAt: new Date().toUTCString() } }
}

function updateName(fullName) {
    return { type: 'customer/updateName', payload: fullName }
}

// function deleteCustomer(nationalId) {
//     return { type: 'customer/deleteCustomer', payload: nationalId }
// }

store.dispatch(createCustomer('aymen Hamim', 'BB230603'))
store.dispatch(updateName('ayman'))
console.log(store.getState())