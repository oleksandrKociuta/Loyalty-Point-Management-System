import React, {Component} from 'react';
import PayCardModal from '../../modal/PayCardModal';
import ShopModal from '../../modal/ShopModal';
import ProductModal from '../../modal/ProductModal';
import {Navbar, NavItem, Nav} from 'react-bootstrap';



export default class PageHeader extends Component {


  render() {
    return (
      <div className="appHeader">
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
            <NavItem eventKey={2} href="/shop">
              Магазини
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={3} href="/product">
               Продукція
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={4} href="/logout">
              Logout
            </NavItem>
          </Nav>
        </Navbar>
        <PayCardModal/>
        <ShopModal/>
        <ProductModal/>
      </div>
    );


  }


}
