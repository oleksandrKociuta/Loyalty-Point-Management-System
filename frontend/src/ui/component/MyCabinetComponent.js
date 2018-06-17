import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class MainComponent extends Component {

  openPayCardModal(id) {
    this.props.show("PAYCARD_MODAL", { id });
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
        <div className="cards-container">
          <div className="panel panel-primary cabinet-card">
            <div className="panel-heading">
              <h4>User information:</h4>
            </div>
            <table className="table card-table">
              <tbody>
                <tr>
                  <td>Login:</td>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>First name:</td>
                  <td>{user.firstName}</td>
                </tr>
                <tr>
                  <td>Last name:</td>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td>Role:</td>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="panel panel-warning cabinet-card">
            <div className="panel-heading">
              <h4>Loyalty card information:</h4>
            </div>
            <table className="table card-table">
              <tbody>
                <tr>
                  <td>Status:</td>
                  <td>{loyaltyCard.status}</td>
                </tr>
                <tr>
                  <td>Inerest Rate:</td>
                  <td>{loyaltyCard.interestRate}</td>
                </tr>
                <tr>
                  <td>Total sum of payments:</td>
                  <td>{loyaltyCard.totalSum}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel panel-success">
          <div className="panel-heading">
            <h3>Pay cards info:</h3>
            <Button onClick={() => this.openPayCardModal()}>
              Добавити нову карточку
          </Button>
            <Button onClick={this.props.getPayCards}>
              <span className="glyphicon glyphicon-repeat"></span>
            </Button>
          </div>
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