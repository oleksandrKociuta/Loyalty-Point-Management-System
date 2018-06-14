const GET = 'shop/GET';
const GET_SUCCESS = 'shop/GET_SUCCESS';
const GET_FAIL = 'shop/GET_FAIL';
const GET_ALL = 'shop/GET_ALL';
const GET_ALL_SUCCESS = 'shop/GET_ALL_SUCCESS';
const GET_ALL_FAIL = 'shop/GET_ALL_FAIL';
const DELETE = 'shop/DELETE';
const DELETE_SUCCESS = 'shop/DELETE_SUCCESS';
const DELETE_FAIL = 'shop/DELETE_FAIL';
const CREATE = 'shop/CREATE';
const CREATE_SUCCESS = 'shop/CREATE_SUCCESS';
const CREATE_FAIL = 'shop/CREATE_FAIL';
const EDIT = 'shop/EDIT';
const EDIT_SUCCESS = 'shop/EDIT_SUCCESS';
const EDIT_FAIL = 'shop/EDIT_FAIL';
const CLEAR_CURRENT = 'shop/CLEAR_CURRENT_ITEM';
const CHANGE_PROPS = 'shop/CHANGE_PROPS';

const initialState = {
  shops: [],
  currentShop: {}
};

// Reducer

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SUCCESS:
      return {
        ...state,
        shops: action.result.data
      };
    case GET_SUCCESS:
      return {
        ...state,
        currentShop: action.result.data
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        shops: state.shops.filter((x) => action.result.data !== x.id),
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        shops: state.shops.map((x) => action.result.data.id === x.id ? action.result.date : x)
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        shops: [...state.shops, action.result.data]
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentShop: {}
      };
    case CHANGE_PROPS:
      return {
        ...state,
        currentShop: {...state.currentShop, [action.payload.name]: action.payload.value}
      };
    default:
      return state;
  }
}

// Actions

export function getAllShops() {
  return {
    types: [GET_ALL, GET_ALL_SUCCESS, GET_ALL_FAIL],
    promise: client => client.get('/api/shop')
  };
}

export function getShop(id) {
  return {
    types: [GET, GET_SUCCESS, GET_FAIL],
    promise: client => client.get('/api/shop/' + id)
  };
}

export function createShop(shop) {
  return {
    types: [CREATE, CREATE_SUCCESS, CREATE_FAIL],
    promise: client => client.put('/api/shop', shop)
  };
}

export function editShop(shop) {
  return {
    types: [EDIT, EDIT_SUCCESS, EDIT_FAIL],
    promise: client => client.post('/api/shop', shop)
  };
}

export function deleteShop(id) {
  return {
    types: [DELETE, DELETE_SUCCESS, DELETE_FAIL],
    promise: client => client.delete('/api/shop/' + id)
  };
}

export function clearCurrentShop() {
  return {
    type: CLEAR_CURRENT
  };
}

export function changeProps(name, value) {
  return {
    type: CHANGE_PROPS,
    payload: {name, value}
  }
}

