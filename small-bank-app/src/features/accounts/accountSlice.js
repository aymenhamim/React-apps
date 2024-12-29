const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    isLoading: false
}


export default function Accountreducer(state = initialStateAccount, action) {
    switch (action.type) {
        case 'account/deposit':
            return { ...state, balance: state.balance + action.payload, isLoading: false }

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

        case 'account/currencyConverting':
            return {
                ...state,
                isLoading: true,
            }

        default:
            return state;
    }
}

function deposit(amount, currency) {
    if (currency === 'USD') return { type: 'account/deposit', payload: amount }
    return async function (dispatch, getState) {
        dispatch({ type: 'account/currencyConverting' })
        // API Call
        const res = await fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`)
        const data = await res.json()
        const converted = data.rates?.USD || amount

        // console.log(data)
        //Return Action
        dispatch({ type: 'account/deposit', payload: converted })
    }

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

export { deposit, withdraw, requestLoan, payLoan }