import MainComponent from 'component/MyCabinetComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {show} from 'redux-modal';
import {getPayCards, deletePayCard} from "../../reducers/paycards";

export default connect(
  state => ({state: state}),
  dispatch => bindActionCreators({getPayCards, deletePayCard, show}, dispatch)
)(MainComponent);
