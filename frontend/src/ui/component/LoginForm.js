import React, { Component } from 'react';
import messages from '../../../assets/messages/messages';
import * as _ from 'lodash';

const LabeledInput = (props) => (
  <div className="pure-control-group">
    <label>
      {props.label}
    </label>
    <input {...props} />
  </div>
);

const ErrorPanel = ({ messageKey }) => {
  let errorMessage = _.get(messages, messageKey, "Can't find error message...");
  return (
    <p className="error-panel">
      {errorMessage}
    </p>
  );
}

export default class LoginForm extends Component {

  state = {
    username: "",
    password: ""
  };

  handleInputChange = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;
    this.setState({ [inputName]: value });
  };

  render() {
    const { errorMessage } = this.props;
    const errorPanel = errorMessage ? <ErrorPanel messageKey={errorMessage} /> : null;
    return (
      <div className="form-container login-registration">
        <form onSubmit={this.handleSubmit} className="pure-form pure-form-aligned unauthorized-form">
          <h1>{messages.login.title}</h1>
          {errorPanel}
          <LabeledInput onChange={this.handleInputChange} label="Login" name="username" />
          <LabeledInput onChange={this.handleInputChange} label="Password" name="password" type="password" />

          <div className="pure-controls">
            <button type="submit" className="pure-button pure-button-primary unauthorized-buttons">Login</button>
            <button onClick={() => this.props.switchToRegistration()} className="pure-button pure-button-primary">Registration form</button>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { login } = this.props;
    login(username, password);
  }
}
