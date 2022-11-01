// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '', // string que armazena o email da pessoa usuária
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return {
      ...state,
      user: {
        email: action.payload,
      },
    };
  default:
    return state;
  }
};

export default userReducer;
