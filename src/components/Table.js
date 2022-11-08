import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../pages/pagescss/Login.css';
import PropTypes from 'prop-types';
import { deleteButton } from '../redux/actions';

class Table extends Component {
  render() {
    // mapStateToProps()
    const { description, dispatch } = this.props;
    // console.log('description', description);
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>
          {
            description.map((info) => (
              <tr key={ info.id }>
                <td>{info.description}</td>
                <td>{info.tag}</td>
                <td>{info.method}</td>
                <td>{Number(info.value).toFixed(2)}</td>
                <td>{info.exchangeRates[info.currency].name}</td>
                <td>{Number(info.exchangeRates[info.currency].ask).toFixed(2)}</td>
                <td>
                  {
                    (Number(info.value) * info.exchangeRates[info.currency].ask)
                      .toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => { dispatch(deleteButton(info.id)); } }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  description: state.wallet.expenses,
});

Table.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  map: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
