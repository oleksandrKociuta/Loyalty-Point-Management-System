import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import constants from "../../../assets/constants/constants";

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
              <h4>Користувач:</h4>
            </div>
            <table className="table card-table">
              <tbody>
                <tr>
                  <td>Логін:</td>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <td>Емейл:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Ім'я:</td>
                  <td>{user.firstName}</td>
                </tr>
                <tr>
                  <td>Прізвище:</td>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <td>Телефон:</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td>Роль:</td>
                  <td>{constants.Role[user.role]}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="panel panel-warning cabinet-card">
            <div className="panel-heading">
              <h4>Накопичувальна картка:</h4>
            </div>
            <table className="table card-table">
              <tbody>
                <tr>
                  <td>Статус:</td>
                  <td>{constants.Loyalty.Status[loyaltyCard.status]}</td>
                </tr>
                <tr>
                  <td>Нарахування:</td>
                  <td>{constants.Loyalty.Rate[loyaltyCard.interestRate]}</td>
                </tr>
                <tr>
                  <td>Сума:</td>
                  <td>{loyaltyCard.totalSum} грн</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel panel-success">
          <div className="panel-heading">
            <h3>Платіжні карточки:</h3>
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
        accessor: (b) => constants.Loyalty.Status[b.status]
      },
      {
        Header: 'Баланс',
        id: 'balance',
        accessor: (b) => b.balance + ' грн'
      }
    ];
  }
}