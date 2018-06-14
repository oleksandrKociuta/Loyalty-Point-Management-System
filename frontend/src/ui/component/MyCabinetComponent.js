import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class MainComponent extends Component {

  openPayCardModal(id) {
    this.props.show("PAYCARD_MODAL", {id});
  }

  componentDidMount() {
    this.props.getPayCards();
  }

  render() {
    const user = this.props.state.authentication.user || {};
    const loyaltyCard = user.loyaltyCard || [];
    const payCards = this.props.state.paycards.items || [];

    return (
      <div>
        <div>
        <h1>User information:</h1>
        <p>Login: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>First name: {user.firstName}</p>
        <p>Last name: {user.lastName}</p>
        <p>Phone: {user.phone}</p>
        <p>Role: {user.role}</p>
        </div>

        <div>
        <h1>Loyalty card information:</h1>
        <p>Status: {loyaltyCard.status}</p>
        <p>Inerest Rate: {loyaltyCard.interestRate}</p>
        <p>Total sum of payments: {loyaltyCard.totalSum}</p>
        </div>

        <div>
        <h1>Pay cards info:</h1>
        <Button onClick={() => this.openPayCardModal()}>
          Добавити нову карточку
        </Button>
        <ReactTable
          data={payCards}
          columns={this.getColumns()}
          defaultPageSize={5}
          className="-striped -highlight"
          defaultSorted={[
            {
              id: "id",
              desc: true
            }
          ]}
        />
        <Button onClick={this.props.getPayCards}>
          Оновити картки
        </Button>
        </div>
      </div>
  
      );
    }

    getColumns() {
      return [
        {
          Header: 'Id',
          id: 'id',
          accessor: 'id'
        },
        {
          Header: 'Статус',
          id: 'status',
          accessor: 'status'
        },
        {
          Header: 'Баланс',
          id: 'balance',
          accessor: (b) => b.balance + ' грн'
        }
      ];
    }
}