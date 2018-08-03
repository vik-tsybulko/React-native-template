const initialState = {

};

export const TEST = 'TEST';

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return { ...state, test: action.test };
    default:
      return state;
  }
}
