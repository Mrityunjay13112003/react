const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) {
        return state;
      }
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
      case "account/convertingCurrency":
        return{...state, isLoading: true};

    default:
      return state;
  }
}

function deposit(amount, currency) {
  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: amount,
    };
  }

  async function convert(base, quote, amount) {
  const api = "https://api.frankfurter.dev";
  const response = await fetch(`${api}/v2/rate/${base}/${quote}`);
  const data = await response.json();
  return (amount * data.rate).toFixed(2);
}

  return async function(dispatch, getState) {
    // API call

    dispatch({type: 'account/convertingCurrency'});
    const converted = await convert(currency, "USD", amount);


    // dispatch action 
    dispatch({
      type: "account/deposit",
      payload: converted,
    });
  }
}
function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payLoan() {
  return {
    type: "account/payLoan",
  };
}

export { deposit, withdraw, requestLoan, payLoan };
