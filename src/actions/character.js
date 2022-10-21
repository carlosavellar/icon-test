export const Types = {
  GET_CHARACTERS_REQUEST: 'users/get_users_request',
  GET_CHARACTERS_SUCCESS: 'users/get_users_success',
};

export const getCharacterRequest = () => ({
  type: Types.GET_CHARACTERS_REQUEST,
});

export const getCharacterSuccess = ({ items }) => {
  return {
    type: Types.GET_CHARACTERS_SUCCESS,
    payload: {
      items,
    },
  };
};
