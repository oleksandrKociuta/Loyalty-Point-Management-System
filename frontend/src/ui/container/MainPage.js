import MainComponent from 'component/MainComponent';
import {connect} from 'react-redux';
import {fetchSimple} from 'reducers/main';

export default connect(
  state => ({items: state.simple.items}),
  {fetchSimple}
)(MainComponent);
