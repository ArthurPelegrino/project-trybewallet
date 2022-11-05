import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFetchEconomyData,
  saveButtonData } from '../redux/actions';
import getEconomyData from '../services/economiaAPI';
// import '../pages/Login';

class WalletForm extends Component {
  state = {
    id: 0,
    expenseValue: '',
    expenseDescription: '',
    currencyKind: 'USD',
    paymentMethod: 'Dinheiro',
    expenseTag: 'Alimentação',
    exchangeRates: {},
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(actionFetchEconomyData());
    // console.log(currency);
  }

  handleSelect = (param) => (
    param.map((elemento, index) => (
      <option value={ elemento } key={ index }>
        {' '}
        {elemento}
        {' '}
      </option>
    ))
  );

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleAddExpenses = async () => {
    const { dispatch } = this.props;
    const { expenseValue, expenseDescription, currencyKind,
      paymentMethod, expenseTag } = this.state;
    const completeEconomyData = await getEconomyData();
    console.log('complete economy data', completeEconomyData);
    this.setState({ exchangeRates: completeEconomyData }, () => {
      const { exchangeRates, id } = this.state;
      dispatch(saveButtonData({
        id,
        value: expenseValue,
        currency: currencyKind,
        method: paymentMethod,
        tag: expenseTag,
        exchangeRates,
        description: expenseDescription,
      }));
      const somaId = id + 1;
      this.setState({ id: somaId });
    });
    // dispatch(saveButtonData({
    //   expenseValue,
    //   expenseDescription,
    //   currencyKind,
    //   paymentMethod,
    //   expenseTag }));
    this.setState({
      expenseValue: '',
      expenseDescription: '',
      currencyKind: 'USD',
      paymentMethod: 'Dinheiro',
      expenseTag: 'Lazer',
    });
  };

  render() {
    const { currency } = this.props;
    const { expenseValue, expenseDescription, currencyKind,
      paymentMethod, expenseTag } = this.state;
    // dispatch(actionFetchEconomyData());
    const methodInput = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagInput = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <h3>Teste</h3>
        <div>
          <h5>Valor da despesa:</h5>
          <input
            type="number"
            data-testid="value-input"
            name="expenseValue"
            value={ expenseValue }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <h5>Descrição da despesa:</h5>
          <input
            type="text"
            data-testid="description-input"
            name="expenseDescription"
            onChange={ this.handleChange }
            value={ expenseDescription }
          />
        </div>

        <select
          data-testid="currency-input"
          name="currencyKind"
          type="select"
          value={ currencyKind }
          onChange={ this.handleChange }
        >
          {this.handleSelect(currency)}
        </select>

        <select
          data-testid="method-input"
          name="paymentMethod"
          value={ paymentMethod }
          onChange={ this.handleChange }
        >
          { this.handleSelect(methodInput)}
        </select>

        <select
          data-testid="tag-input"
          name="expenseTag"
          value={ expenseTag }
          onChange={ this.handleChange }
        >
          { this.handleSelect(tagInput)}
        </select>

        <button
          type="button"
          onClick={ this.handleAddExpenses }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
  // completeCurrency: state.wallet.currencies.exchangeRates,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
