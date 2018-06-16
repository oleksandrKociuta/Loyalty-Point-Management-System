import { combineReducers } from 'redux';
import main from './main';
import authentication from './authentication';
import registration from './registration';
import { routerReducer as routing } from 'react-router-redux';
import {reducer as modal} from 'redux-modal';
import paycards from './paycards';
import shop from './shop';
import products from './products';


export default combineReducers({
  main,
  authentication,
  registration,
  routing,
  modal,
  paycards,
  shop,
  products
});
