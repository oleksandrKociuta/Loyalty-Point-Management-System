import React, {Component} from 'react';
import PayCardModal from '../../modal/PayCardModal';
import ShopModal from '../../modal/ShopModal';
import {Navbar, NavItem, Nav} from 'react-bootstrap';



export default class PageHeader extends Component {


  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Головна Сторінка</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/mainPage">
              Мій кабінет
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={4} href="/shop">
              Магазини і товари
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={3} href="/logout">
              Logout
            </NavItem>
          </Nav>
        </Navbar>
        <PayCardModal/>
        <ShopModal/>
      </div>
    );


  }


}
