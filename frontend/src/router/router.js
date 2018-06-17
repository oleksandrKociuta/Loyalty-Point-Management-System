import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from 'container/App';
import mainPage from 'container/MyCabinetPage';
import LoginPage from 'container/LoginPage';
import RegistrationPage from 'container/RegistrationPage';
import ShopComponent from '../ui/component/ShopComponent';
import ProductComponent from '../ui/component/ProductComponent';


export default (onLogout) => (
  <Route path="/" name="app" component={App}>
    <Route path="mainPage" component = {mainPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logout" onEnter={onLogout}/>
    <Route path="registration" component={RegistrationPage}/>
    <Route path="shop" component={ShopComponent}/>
    <Route path="product" component={ProductComponent}/>
  </Route>
);
