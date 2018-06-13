import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from 'container/App';
import mainPage from 'container/MainPage';
import LoginPage from 'container/LoginPage';
import RegistrationPage from 'container/RegistrationPage';

export default (onLogout) => (
  <Route path="/" name="app" component={App}>
    <Route path="mainPage" component = {mainPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logout" onEnter={onLogout}/>
    <Route path="registration" component={RegistrationPage}/>
  </Route>
);
