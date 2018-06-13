import MainComponent from 'component/MainComponent';
import {connect} from 'react-redux';
import {fetchSimple} from 'reducers/main';

export default connect(
  state => ({state: state}),
  {fetchSimple}
)(MainComponent);
