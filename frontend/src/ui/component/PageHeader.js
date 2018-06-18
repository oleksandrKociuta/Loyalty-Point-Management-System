import React, {Component} from 'react';
import PayCardModal from '../../modal/PayCardModal';
import ShopModal from '../../modal/ShopModal';
import ProductModal from '../../modal/ProductModal';
import BuyProductModal from '../../modal/BuyProductModal';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import { Link } from 'react-router';


export default class PageHeader extends Component {


  render() {
    return (
      <div className="appHeader">
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Головна Сторінка</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/mainPage">Мій кабінет</Link>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={2}>
              <Link to="/shop">Магазини</Link>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={3}>
               <Link to="/product">Продукція</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={4}>
              <Link to="/logout">Вихід</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <PayCardModal/>
        <ShopModal/>
        <ProductModal/>
        <BuyProductModal/>
      </div>
    );


  }


}
