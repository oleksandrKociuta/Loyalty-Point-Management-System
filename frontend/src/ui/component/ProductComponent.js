import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { show } from 'redux-modal';
import { Button } from 'react-bootstrap';
import ReactTable from 'react-table';
import { getAllShops, deleteShop } from "../../reducers/shop";
import { getAllProductsByShopId, getAllProducts, deleteProduct, changeProps } from "../../reducers/products";
import constants from "../../../assets/constants/constants";



class ProductComponent extends Component {

  openProductModal(product) {
    this.props.show("BUY_PRODUCT_MODAL", {product});
  }

  componentWillMount() {
    this.props.getAllShops();
    this.props.getAllProducts();
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
        accessor: (b) => constants.Product.Type[b.type]
      },
      {
        Header: 'Ціна',
        id: 'price',
        accessor: (b) => b.price + ' грн'
      },
      {
        Header: 'дії',
        id: 'actions',
        accessor: (b) => b,
        Cell: (row) =>
          <div>
            <Button onClick={() => this.openProductModal({id:row.value.id, name:row.value.name, type:row.value.type, price:row.value.price})}>
              Купити товар
            </Button>
            <Button onClick={() => this.props.deleteProduct(row.value.id)}>
              <span className="glyphicon glyphicon-minus"></span>
            </Button>
          </div>
      }
    ];
  }

  getDropdown(shops) {
    return (
      <select onChange={(e) => this.props.changeProps('id', e.target.value)} className="product-select">
        {(() => shops.map(shop => <option name='id' value={shop.id} key={shop.id}>{shop.name}</option>))()}
      </select>
    )
  }

  render() {
    let items = this.props.product.products || [];
    let shops = this.props.shop.shops || [];

    return (
      <div className="panel panel-success shop-panel">
        <div className="panel-heading">
          <h3>Виберіть магазин
          <Button onClick={() => this.props.getAllProductsByShopId(this.props.product.currentProduct.id)}>
              <span className="glyphicon glyphicon-repeat"></span>
            </Button>
          </h3>
          {this.getDropdown(shops)}
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
  state => ({ shop: state.shop, product: state.products }),
  dispatch => bindActionCreators({ getAllShops, deleteShop, getAllProductsByShopId, getAllProducts, deleteProduct, show, changeProps }, dispatch)
)(ProductComponent);
