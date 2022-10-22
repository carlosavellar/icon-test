export const Types = {
  GET_CHARACTERS_REQUEST: 'character',
  GET_CHARACTERS_SUCCESS: 'character_success',
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
