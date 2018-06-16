import React, {Component} from 'react';
import {connect} from 'react-redux';
import {connectModal} from 'redux-modal';
import {createProduct, getProduct, clearCurrentProduct, editProduct, changeProps} from "../reducers/products";
import {Modal, Button} from 'react-bootstrap';

class CreateEditProduct extends Component {

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
    if (product.id) {
      this.props.editProduct(product);
    } else {
      this.props.createProduct(product);
    }
    this.props.handleHide();
  }

  render() {
    const {show, handleHide} = this.props;
    let product = this.state || {};
    return (
      <Modal show={show}>
        <Modal.Header>
          Новий Товар
        </Modal.Header>
        <Modal.Body>
          <div className='create-edit-procedure'>
            <form onSubmit={this.handleSubmit} className="form-container">
              <label>
                Назва:
                </label>
                <input type="text" name='name' value={product.name}
                    onChange={this.handleChange}/>
              
              <label> Тип Продукту</label>
                <select value={product.type} name='type' onChange={this.handleChange}>
                    <option value=''>Виберіть тип</option>
                    <option value='SPORT_SUITE'>Спортивний костюм</option>
                    <option value='CUP'>Кепка</option>
                    <option value='SOCCER_BALL'>Футбольний м'яч</option>
                    <option value='TRAINERS'>Кросівки</option>
                </select>
              
              <label>
                Ціна:
                </label>
                <div>
                <input type="text" min='50' name='name' maxLength='8' value={product.name}
                    onChange={this.handleChange}/> грн.
                    </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleHide}>Закрити</Button>
          <Button onClick={this.onSubmit}>{product.id ? 'Редагувати' : 'Додати'}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connectModal({name: 'PRODUCT_MODAL'})(
  connect(
    null,
    // state => {user: state.shop},
    {createProduct, getProduct, clearCurrentProduct, editProduct, changeProps}
  )(CreateEditProduct));

  CreateEditProduct.contextTypes = {
  store: React.PropTypes.object
};