import React, {Component} from 'react';
import {connect} from 'react-redux';
import {connectModal} from 'redux-modal';
import {createProduct, getProduct, clearCurrentProduct, editProduct, changeProps} from "../reducers/products";
import {Modal, Button} from 'react-bootstrap';
import Switcher from 'react-switcher';
import ReactTable from 'react-table';
import { bindActionCreators } from 'redux';
import {getPayCards, deletePayCard} from "../reducers/paycards";
import constants from "../../assets/constants/constants";

class BuyProduct extends Component {

    constructor(props, context) {
        super(props, context);
    
        const store = this.context.store;
    
        this.unsubscribe = store.subscribe(() => {
          this.setState(store.getState().products.currentProduct)
        });
    
        this.state = store.getState().products.currentProduct;
    
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

  componentWillMount() {
    if (this.props.id) {
      this.props.getProduct(this.props.id);
    }
    this.props.getPayCards();
  }

  componentWillUnmount() {
    this.props.clearCurrentProduct();
    this.unsubscribe();
  }


  handleChange(event) {
    this.props.changeProps(event.target.name, event.target.value)
  }

  onSubmit() {
    let product = this.state;
    let shopId = this.props.id;
    if (product.id) {
      this.props.editProduct(product);
    } else {
      this.props.createProduct(product, shopId);
    }
    this.props.handleHide();
  }

  getPayCardColumns() {
    return [
      {
        Header: 'Id',
        id: 'id',
        accessor: 'id'
      },
      {
        Header: 'Статус',
        id: 'status',
        accessor: (b) => constants.Loyalty.Status[b.status]
      },
      {
        Header: 'Баланс',
        id: 'balance',
        accessor: (b) => b.balance + ' грн'
      },
      {
        Header: 'дії',
        id: 'actions',
        accessor: (b) => b,
        Cell: (row) =>
          <div>
            <Button onClick={() => this.openProductModal({id:row.value.id, name:row.value.name, type:row.value.type, price:row.value.price})}>
              Придбати
            </Button>
          </div>
      }
    ];
  }

  getLoyaltyCardColumns() {
    return [
      {
        Header: 'Id',
        id: 'id',
        accessor: 'id'
      },
      {
        Header: 'Статус',
        id: 'status',
        accessor: (b) => constants.Loyalty.Status[b.status]
      },
      {
        Header: 'Нарахування',
        id: 'interestRate',
        accessor: (b) => constants.Loyalty.Rate[b.interestRate]
      },
      {
        Header: 'Сума',
        id: 'totalSum',
        accessor: (b) => b.totalSum + ' грн'
      },
      {
        Header: 'Бонуси',
        id: 'bonuses',
        accessor: 'bonuses'
      },
      {
        Header: 'дії',
        id: 'actions',
        accessor: (b) => b,
        Cell: (row) =>
          <div>
            <Button onClick={() => this.openProductModal({id:row.value.id, name:row.value.name, type:row.value.type, price:row.value.price})}>
              Придбати
            </Button>
          </div>
      }
    ];
  }

  render() {
    const {show, handleHide} = this.props;
    let product = this.props.product || {};
    let items = this.state.isLoyaltyCard ? [].concat(this.props.authentication.user.loyaltyCard) : this.props.paycards.items;
    items = items ? items : [];
    return (
      <Modal show={show}>
        <Modal.Header>
           Купівля Товару
        </Modal.Header>
        <Modal.Body>
        <div className="cards-container-a">
        <div className="panel panel-primary cabinet-card">
          <div className="panel-heading">
            <h4>Інформація про покупку:</h4>
          </div>
          <table className="table card-table">
            <tbody>
              <tr>
                <td>id:</td>
                <td>{product.id}</td>
              </tr>
              <tr>
                <td>Ім'я:</td>
                <td>{product.name}</td>
              </tr>
              <tr>
                <td>Тип:</td>
                <td>{constants.Product.Type[product.type]}</td>
              </tr>
              <tr>
                <td>Ціна:</td>
                <td>{product.price} грн</td>
              </tr>
            </tbody>
          </table>
          </div>
        <Switcher
            on={this.state.isLoyaltyCard} 
            onClick={() => this.setState({ isLoyaltyCard: !this.state.isLoyaltyCard })} 
        >
             Розплатитися Бонусами
        </Switcher>
        </div>
        <div className="panel panel-success shop-panel">
        <div className="panel-heading">
          <h3>Виберіть магазин
          <Button onClick={() => this.props.getAllProductsByShopId(this.props.product.currentProduct.id)}>
              <span className="glyphicon glyphicon-repeat"></span>
            </Button>
          </h3>
        </div>
        <ReactTable
          data={items}
          columns={this.state.isLoyaltyCard ? this.getLoyaltyCardColumns() : this.getPayCardColumns()}
          defaultPageSize={5}
          className="-striped -highlight"
          defaultSorted={[
            {
              id: "id",
              desc: true
            }
          ]}
        />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleHide}>Закрити</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connectModal({name: 'BUY_PRODUCT_MODAL'})(
  connect(
    state => ({authentication: state.authentication, paycards: state.paycards}),
    dispatch => bindActionCreators({createProduct, getProduct, clearCurrentProduct, editProduct, changeProps, getPayCards, deletePayCard}, dispatch)
  )(BuyProduct));

  BuyProduct.contextTypes = {
  store: React.PropTypes.object
};