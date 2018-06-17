import React, {Component} from 'react';
import PageHeader from './PageHeader';
import WelcomePage from './WelcomePage';

export default class MainPage extends Component {


  render() {
    return (
      <div>
        <PageHeader/>
        {
          this.props.location.pathname === '/' ?
            <WelcomePage/> :
            this.props.children
        }
      </div>
    );
  }
}
