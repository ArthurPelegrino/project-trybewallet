// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { DELETE_BUTTON, RECEIVE_ECONOMY_DATA, SAVE_BUTTON_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
  case RECEIVE_ECONOMY_DATA:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((elemento) => elemento !== 'USDT'),
    };
  case SAVE_BUTTON_DATA:
    return {
      ...state,
      expenses:
        [...state.expenses,
          action.payload,
        ],
    };
  case DELETE_BUTTON:
    return {
      ...state,
      expenses:
      [...state.expenses.filter((elemento) => elemento.id !== action.payload)],
    };
  // case RECEIVE_COMPLETE_ECONOMY_DATA:
  //   return {
  //     ...state,
  //     exchangeRates: action.payload,
  //   };
  default:
    return state;
  }
};

export default wallet;
