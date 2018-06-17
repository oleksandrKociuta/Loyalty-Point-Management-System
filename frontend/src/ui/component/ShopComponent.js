import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { show } from 'redux-modal';
import { Button } from 'react-bootstrap';
import ReactTable from 'react-table';
import { getAllShops, deleteShop } from "../../reducers/shop";
import { getAllProducts, deleteProduct } from "../../reducers/products";


class ShopComponent extends Component {

  openShopModal(id) {
    this.props.show("SHOP_MODAL", { id });
  }

  openProductModal(id) {
    this.props.show("PRODUCT_MODAL", { id });
  }

  componentWillMount() {
    this.props.getAllShops();
  }

  getColumns() {
    return [
      {
        Header: 'Id',
        id: 'id',
        accessor: 'id'
      },
      {
        Header: 'Ім\'я',
        id: 'name',
        accessor: 'name'
      },
      {
        Header: 'Тип',
        id: 'type',
        accessor: 'type'
      },
      {
        Header: 'дії',
        id: 'actions',
        accessor: (b) => b,
        Cell: (row) =>
          <div>
            <Button onClick={() => this.openProductModal(row.value.id)}>
              Додати товар
            </Button>
            <Button onClick={() => this.props.deleteShop(row.value.id)}>
              Видалити
            </Button>
          </div>
      }
    ];
  }

  render() {
    let items = this.props.shop.shops || [];

    return (
      <div className="panel panel-success shop-panel">
        <div className="panel-heading">
          <h3>Procedures Data:</h3>
          <Button onClick={() => this.openShopModal()}>
            Додати новий магазин
        </Button>
          <Button onClick={this.props.getAllShops}>
            <span className="glyphicon glyphicon-repeat"></span>
          </Button>
        </div>
        <ReactTable
          data={items}
          columns={this.getColumns()}
          defaultPageSize={10}
          className="-striped -highlight"
          defaultSorted={[
            {
              id: "id",
              desc: true
            }
          ]}
        />


      </div>
    );
  }
}

export default connect(
  state => ({ shop: state.shop, product: state.product }),
  dispatch => bindActionCreators({ getAllShops, deleteShop, getAllProducts, deleteProduct, show }, dispatch)
)(ShopComponent);
