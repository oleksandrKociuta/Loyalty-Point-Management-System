import React, {Component} from 'react';
import {connect} from 'react-redux';
import {connectModal} from 'redux-modal';
import {createPayCard, getPayCard, clearPayCard, editPayCard} from "../reducers/paycards";
import {Modal, Button} from 'react-bootstrap';

class CreatePayCard extends Component {

  constructor(props, context) {
    super(props, context);

    const store = this.context.store;

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().paycards.currentItem)
    });

    this.state = store.getState().paycards.currentItem;

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.id) {
      this.props.getPayCards(this.props.id);
    }
  }

  componentWillUnmount() {
    this.props.clearPayCard();
    this.unsubscribe();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit() {
    let paycard = this.state;
    if (paycard.id) {
      this.props.editPayCard(paycard);
    } else {
      this.props.createPayCard(paycard);
    }
    this.props.handleHide();
  }

  render() {
    const {show, handleHide} = this.props;

    return (

      <Modal show={show}>
        <Modal.Header>
          Розрахункова картка
        </Modal.Header>
        <Modal.Body>
          <div className='create-edit-paycard'>
            <form onSubmit={this.handleSubmit}>
              <label>
                Баланс : 
                <input type='text' min='50' name='balance' maxLength='8' value={this.state['balance']}
                       onChange={this.handleChange}/>
              </label>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleHide}>Закрити</Button>
          <Button onClick={this.onSubmit}>{this.state.id ? 'Редагувати' : 'Додати'}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connectModal({name: 'PAYCARD_MODAL'})(
  connect(
    null,
    {createPayCard, getPayCard, clearPayCard, editPayCard}
  )(CreatePayCard));

  CreatePayCard.contextTypes = {
  store: React.PropTypes.object
};
