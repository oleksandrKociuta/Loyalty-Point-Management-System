import RegistrationForm from 'component/RegistrationForm';
import {connect} from 'react-redux';
import {register} from 'reducers/registration';

export default connect(
  state => ({errorMessage: state.registration.errorMessage}),
  {register}
)(RegistrationForm);
