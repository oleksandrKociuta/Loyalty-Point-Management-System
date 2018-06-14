import React, {Component} from 'react';
import {connect} from 'react-redux';
import {connectModal} from 'redux-modal';
import {createShop, getShop, clearCurrentShop, editShop, changeProps} from "../reducers/shop";
import {Modal, Button} from 'react-bootstrap';

class CreateEditShop extends Component {

    constructor(props, context) {
        super(props, context);
    
        const store = this.context.store;
    
        this.unsubscribe = store.subscribe(() => {
          this.setState(store.getState().shop.currentShop)
        });
    
        this.state = store.getState().shop.currentShop;
    
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

  componentWillMount() {
    if (this.props.id) {
      this.props.getShop(this.props.id);
    }
  }

  componentWillUnmount() {
    this.props.clearCurrentShop();
    this.unsubscribe();
  }

  handleChange(event) {
    this.props.changeProps(event.target.name, event.target.value)
  }

  onSubmit() {
    let shop = this.state;
    if (shop.id) {
      this.props.editShop(shop);
    } else {
      this.props.createShop(shop);
    }
    this.props.handleHide();
  }

  render() {
    const {show, handleHide} = this.props;
    let shop = this.state || {};
    return (

      <Modal show={show}>
        <Modal.Header>
          Новий Магазин
        </Modal.Header>
        <Modal.Body>
          <div className='create-edit-procedure'>
            <form onSubmit={this.handleSubmit}>
              <label>
                Ім'я:
                <input type="text" name='name' value={shop.name}
                    onChange={this.handleChange}/>
              </label>
              <label> Тип Магазину
                <select value={shop.type} name='type' onChange={this.handleChange}>
                    <option value=''>Виберіть тип</option>
                    <option value='SPORT'>Sport</option>
                    <option value='ONLINE'>Online</option>
                </select>
              </label>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleHide}>Close</Button>
          <Button onClick={this.onSubmit}>{shop.id ? 'Edit' : 'Create'}</Button>
        </Modal.Footer>

      </Modal>
    );
  }
}

export default connectModal({name: 'SHOP_MODAL'})(
  connect(
    null,
    // state => {user: state.shop},
    {createShop, getShop, clearCurrentShop, editShop, changeProps}
  )(CreateEditShop));

  CreateEditShop.contextTypes = {
  store: React.PropTypes.object
};