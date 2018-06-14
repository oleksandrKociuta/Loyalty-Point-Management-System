import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getSession } from 'reducers/authentication';
import counterpart from 'counterpart';
import MainPage from '../component/MainPage';
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import 'stylus/main.styl';

export class App extends Component {
  
    componentDidMount() {
      if (this.props.location.pathname !== '/logout')
        this.props.getSession();
    }
  
    render() {
  
      return (
        <div id="application">
          {
            !this.props.isAuthenticated ?
          [<LoginPage/>, <RegistrationPage/>] :
              <MainPage {...this.props}/>
          }
        </div>
      );
    }
  }
  
  export default connect(
    state => ({isAuthenticated: state.authentication.isAuthenticated}),
    {getSession}
  )(App);
