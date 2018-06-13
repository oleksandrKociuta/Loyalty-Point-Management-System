import { combineReducers } from 'redux';
import main from './main';
import authentication from './authentication';
import registration from './registration';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
  main,
  authentication,
  registration,
  routing
});
