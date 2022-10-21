import { Types } from './../actions/character';

const INITIAL_STATE = {
  items: [],
};

export const CharactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_CHARACTERS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
