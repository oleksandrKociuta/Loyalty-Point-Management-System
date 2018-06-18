const GET = 'product/GET';
const GET_SUCCESS = 'product/GET_SUCCESS';
const GET_FAIL = 'product/GET_FAIL';
const GET_ALL = 'product/GET_ALL';
const GET_ALL_SUCCESS = 'product/GET_ALL_SUCCESS';
const GET_ALL_FAIL = 'product/GET_ALL_FAIL';
const DELETE = 'product/DELETE';
const DELETE_SUCCESS = 'product/DELETE_SUCCESS';
const DELETE_FAIL = 'product/DELETE_FAIL';
const CREATE = 'product/CREATE';
const CREATE_SUCCESS = 'product/CREATE_SUCCESS';
const CREATE_FAIL = 'product/CREATE_FAIL';
const EDIT = 'product/EDIT';
const EDIT_SUCCESS = 'product/EDIT_SUCCESS';
const EDIT_FAIL = 'product/EDIT_FAIL';
const CLEAR_CURRENT = 'product/CLEAR_CURRENT_ITEM';
const CHANGE_PROPS = 'product/CHANGE_PROPS';
const BUY = 'product/BUY';
const BUY_SUCCESS = 'product/BUY_SUCCESS';
const BUY_FAIL = 'product/BUY_FAIL';

const initialState = {
  products: [],
  currentProduct: {}
};

// Reducer

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SUCCESS:
      return {
        ...state,
        products: action.result.data
      };
    case GET_SUCCESS:
      return {
        ...state,
        currentProduct: action.result.data
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        products: state.products.filter((x) => action.result.data !== x.id),
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        products: state.products.map((x) => action.result.data.id === x.id ? action.result.date : x)
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.result.data]
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentProduct: {}
      };
    case CHANGE_PROPS:
      return {
        ...state,
        currentProduct: {...state.currentProduct, [action.payload.name]: action.payload.value}
      };
    case BUY_SUCCESS:
    return {
      ...state,
      products: [...state.products, action.result.data]
    }
    default:
      return state;
  }
}

// Actions

export function getAllProducts() {
  return {
    types: [GET_ALL, GET_ALL_SUCCESS, GET_ALL_FAIL],
    promise: client => client.get('/api/product/all')
  };
}

export function getAllProductsByShopId(shopId) {
  return {
    types: [GET_ALL, GET_ALL_SUCCESS, GET_ALL_FAIL],
    promise: client => client.get('/api/product/' + shopId)
  };
}

export function getProduct(id) {
  return {
    types: [GET, GET_SUCCESS, GET_FAIL],
    promise: client => client.get('/api/product/' + id)
  };
}

export function createProduct(product, shopId) {
  return {
    types: [CREATE, CREATE_SUCCESS, CREATE_FAIL],
    promise: client => client.put('/api/product/' + shopId, product)
  };
}

export function editProduct(product) {
  return {
    types: [EDIT, EDIT_SUCCESS, EDIT_FAIL],
    promise: client => client.post('/api/product', product)
  };
}

export function deleteProduct(id) {
  return {
    types: [DELETE, DELETE_SUCCESS, DELETE_FAIL],
    promise: client => client.delete('/api/product/' + id)
  };
}

export function clearCurrentProduct() {
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

