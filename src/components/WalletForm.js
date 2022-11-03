import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFetchEconomyData } from '../redux/actions';

class WalletForm extends Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(actionFetchEconomyData());
    // console.log(currency);
  }

  handleSelect = (param) => (
    param.map((elemento, index) => (
      <option key={ index }>
        {' '}
        {elemento}
        {' '}
      </option>
    ))
  );

  render() {
    const { currency } = this.props;
    console.log(currency);
    // dispatch(actionFetchEconomyData());
    const methodInput = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagInput = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <div>
          <h5>Valor da despesa:</h5>
          <input
            type="number"
            data-testid="value-input"
          />
        </div>
        <div>
          <h5>Descrição da despesa:</h5>
          <input
            type="text"
            data-testid="description-input"
          />
        </div>

        <select
          data-testid="currency-input"
          name=""
          type="select"
          // value={ }
          // onChange={}
        >
          { this.handleSelect(currency)}
        </select>

        <select data-testid="method-input">
          { this.handleSelect(methodInput)}
        </select>

        <select data-testid="tag-input">
          { this.handleSelect(tagInput)}
        </select>

        <button type="button">
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
