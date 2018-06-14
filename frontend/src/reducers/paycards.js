const GET = 'payCard/GET';
const GET_SUCCESS = 'payCard/GET_SUCCESS';
const GET_FAIL = 'payCard/GET_FAIL';
const GET_ALL = 'payCard/GET_ALL';
const GET_ALL_SUCCESS = 'payCard/GET_ALL_SUCCESS';
const GET_ALL_FAIL = 'payCard/GET_ALL_FAIL';
const DELETE = 'payCard/DELETE';
const DELETE_SUCCESS = 'payCard/DELETE_SUCCESS';
const DELETE_FAIL = 'payCard/DELETE_FAIL';
const CREATE = 'payCard/CREATE';
const CREATE_SUCCESS = 'payCard/CREATE_SUCCESS';
const CREATE_FAIL = 'payCard/CREATE_FAIL';
const EDIT = 'payCard/EDIT';
const EDIT_SUCCESS = 'payCard/EDIT_SUCCESS';
const EDIT_FAIL = 'payCard/EDIT_FAIL';
const CLEAR_CURRENT = 'payCard/CLEAR_CURRENT_ITEM';

const initialState = {
  items: [],
  currentItem: {}
};

// Reducer

export default function payCardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SUCCESS:
      return {
        ...state,
        items: action.result.data
      };
    case GET_SUCCESS:
      return {
        ...state,
        currentItem: action.result.data
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter((x) => action.result.data !== x.id),
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        items: state.items.map((x) => action.result.data.id === x.id ? action.result.date : x)
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.result.data]
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentItem: {}
      };
    default:
      return state;
  }
}

// Actions

export function getPayCards() {
  return {
    types: [GET_ALL, GET_ALL_SUCCESS, GET_ALL_FAIL],
    promise: client => client.get('/api/payCard/all')
  };
}

export function getPayCard(id) {
  return {
    types: [GET, GET_SUCCESS, GET_FAIL],
    promise: client => client.get('/api/procedure/' + id)
  };
}

export function createPayCard(balance) {
  return {
    types: [CREATE, CREATE_SUCCESS, CREATE_FAIL],
    promise: client => client.post('/api/payCard/add', balance)
  };
}

export function editPayCard(payCard) {
  return {
    types: [EDIT, EDIT_SUCCESS, EDIT_FAIL],
    promise: client => client.post('/api/procedure', payCard)
  };
}

export function deletePayCard(id) {
  return {
    types: [DELETE, DELETE_SUCCESS, DELETE_FAIL],
    promise: client => client.delete('/api/payCard/delete' + id)
  };
}

export function clearPayCard() {
  return {
    type: CLEAR_CURRENT
  };
}
