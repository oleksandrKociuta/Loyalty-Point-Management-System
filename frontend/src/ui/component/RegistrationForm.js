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

const ErrorPanel = ({messageKey}) => { 
  let errorMessage = _.get(messages, messageKey, messageKey);
  return (
    <p className="error-panel">
      {errorMessage}
    </p>
  );
}

export default class RegistrationForm extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phone: "",
    password1: "",
    password2: "",
  };

  componentDidMount() {
    this.setState({errorMessage: this.props.errorMessage});;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({errorMessage: nextProps.errorMessage});
  }

  handleInputChange = (e) => {
    let value = e.target.value;
    let inputName = e.target.name;
    this.setState({[inputName]: value});
  };

  render() {
    const {errorMessage} = this.state; 
    const errorPanel = errorMessage ? <ErrorPanel messageKey={errorMessage}/> : null;
    return (
      <div className="form-container login-registration">

        <form onSubmit={this.handleSubmit} className="pure-form pure-form-aligned unauthorized-form">
          <h1>{messages.registration.title}</h1>
          {errorPanel}
          <LabeledInput onChange={this.handleInputChange} label="Ім'я" name="firstName"/>
          <LabeledInput onChange={this.handleInputChange} label="Прізвище" name="lastName"/>
          <LabeledInput onChange={this.handleInputChange} label="Мейл" name="email"/>
          <LabeledInput onChange={this.handleInputChange} label="Логін" name="username"/>
          <LabeledInput onChange={this.handleInputChange} label="Телефон" name="phone"/>
          <LabeledInput onChange={this.handleInputChange} label="Введіть пароль" name="password1" type="password"/>
          <LabeledInput onChange={this.handleInputChange} label="Введіть ще раз" name="password2" type="password"/>
          <div className="pure-controls unauthorized-buttons">
            <button type="submit" className="pure-button pure-button-primary unauthorized-buttons">Зареєструватися</button>
            <button onClick={()=>this.props.switchToLogin()} className="pure-button pure-button-primary">Логінування</button>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {register} = this.props;
    if(this.validateInput(this.state)) {
      register(this.state);
    } 
  };

  validateInput = (input) => {
    let errorMessage;
    if(!this.isValidInput(input)) {
      errorMessage = messages.registration.error.emptyMandatoryFields;
    } else if(input.password1 !== input.password2 || input.password1.length < 8){
      errorMessage = messages.registration.error.passwordValidationError;
    }
    this.setState({errorMessage: errorMessage});
    return errorMessage ? false : true;
  };

  isValidInput = (input) => {
    let isValidate = true;
    let inputKeys =  Object.keys(input).filter(function(e) {
      return e !== 'errorMessage';
    });
    inputKeys.forEach(function(a) {
      if(input[a] === '') {
        isValidate = false;
      }
    }.bind(this));
    return isValidate;
  }
}