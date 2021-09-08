import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions';

const initialState = {
  person: {
    name: {
      title: "",
      first: "",
      last: ""
    },
    picture: {
      large: "",
      medium: "",
      thumbnail: ""
    }
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        person: {},
        isFetching: true,
        error:''
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        person: action.payload,
        isFetching: false,
        error: ''
      });
    case(FETCH_FAIL):
      return({
        ...state,
        person: {},
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};