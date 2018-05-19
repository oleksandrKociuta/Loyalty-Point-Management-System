import { combineReducers } from 'redux';
import simple from './simple';
import authentication from './authentication';
import registration from './registration';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
  simple,
  authentication,
  registration,
  routing
});
