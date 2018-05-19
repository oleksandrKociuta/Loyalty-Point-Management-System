import React, { Component } from 'react';
import messages from '../../../assets/messages/messages';

const LabeledInput = (props) => (
  <div className="pure-control-group">
    <label>
      {props.label}
    </label>
    <input {...props}/>
  </div>
);

const ErrorPanel = ({messageKey}) => (
  <p className="error-panel">
    {messages.registration.badRegistration}
  </p>
);

export default class RegistrationForm extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password1: "",
    password2: ""
  };

  handleInputChange = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;
    this.setState({[inputName]: value});
  };

  render() {
    const {errorMessage} = this.props;
    const errorPanel = errorMessage ? <ErrorPanel messageKey={errorMessage}/> : null;
    return (
      <div>
        <h1>{messages.registration.title}</h1>
        {errorPanel}

        <form onSubmit={this.handleSubmit} className="pure-form pure-form-aligned">
          <LabeledInput onChange={this.handleInputChange} label="First name" name="firstName"/>
          <LabeledInput onChange={this.handleInputChange} label="Last name" name="lastName"/>
          <LabeledInput onChange={this.handleInputChange} label="Email" name="email"/>
          <LabeledInput onChange={this.handleInputChange} label="Login" name="username"/>
          <LabeledInput onChange={this.handleInputChange} label="Enter Password" name="password1" type="password"/>
          <LabeledInput onChange={this.handleInputChange} label="Re-enter Password" name="password2" type="password"/>
          <div className="pure-controls">
            <button type="submit" className="pure-button pure-button-primary">Registrate</button>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {register} = this.props;
    register(this.state);
  }
}