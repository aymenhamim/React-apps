import { createStore } from "redux"


const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
}

function reducer(state = initialState, action) {
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

        case 'account/payloan':
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



const store = createStore(reducer)

store.dispatch({ type: 'account/deposit', payload: 1000 })
store.dispatch({ type: 'account/withdraw', payload: 1 })
console.log(store.getState())

store.dispatch({ type: 'account/requestLoan', payload: { amount: 400, loanPurpose: 'baghi nchri gha clavier' } })
console.log(store.getState())

store.dispatch({ type: 'account/payloan' })
console.log(store.getState())