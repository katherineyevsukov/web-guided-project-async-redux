import { ADD_FRIEND, TOGGLE_FRIEND } from '../actions';

const initialState = {
  friends: [
    { name: 'Clint', besties: true },
    { name: 'Caitlin', besties: false }
  ]
};

export const friendsReducer = (state = initialState, action) => {
  console.log("--------------");
  console.log("current state: ", state);
  console.log("current action: ", action);
  console.log("--------------");
  switch (action.type) {
    case ADD_FRIEND:
      const newFriend = {
        name: action.payload,
        besties: false
      };
      return {
        ...state,
        friends: [...state.friends, newFriend]
      };
    case TOGGLE_FRIEND:
      return {
        ...state,
        friends: state.friends.map((friend, index) =>
          action.payload === index
            ? { ...friend, besties: !friend.besties }
            : friend
        )
      };
    default:
      return state;
  }
};
