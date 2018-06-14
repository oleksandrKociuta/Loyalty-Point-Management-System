import { browserHistory } from 'react-router';

const REGISTRATION = 'registration/REGISTRATION';
const REGISTRATION_SUCCESS = 'registration/REGISTRATION_SUCCESS';
const REGISTRATION_FAIL = 'registration/REGISTRATION_FAIL';

const initialState = {
  isAuthenticated: false,
  username: null,
  errorMessage: null,
  loading: true
};

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.result.data.authenticated,
        username: action.result.data.userName,
        errorMessage: null
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        errorMessage: action.error.data.messageKey
      };
    default:
      return state;
  }
}

// Public action creators and async actions

export function register(registrationForm) {
  return {
    types: [REGISTRATION, REGISTRATION_SUCCESS, REGISTRATION_FAIL],
    promise: (client) => client.post('api/user/createUser', registrationForm),
    afterSuccess: (dispatch, getState, response) => {
      const currentPath = getState().routing.locationBeforeTransitions.pathname;
      browserHistory.replace({pathname: '/login', state: {nextPathname: currentPath}});
    }
  };
}