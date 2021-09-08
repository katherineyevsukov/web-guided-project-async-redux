import { UPDATE_TITLE } from '../actions';

const initialState = {
  title: 'Dragon Club Members'
};

export function titleReducer(state = initialState, action) {
  console.log("--------------");
  console.log("current state: ", state);
  console.log("current action: ", action);
  console.log("--------------");
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
