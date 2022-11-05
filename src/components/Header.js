import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import WalletForm from './WalletForm';

class Wallet extends React.Component {
  handleTotal = () => {
    let acumulador = 0;
    const { totalValue } = this.props;
    totalValue.forEach((elemento) => {
      const myCurrency = elemento.currency;
      const askValue = elemento.exchangeRates[myCurrency].ask;
      acumulador += +elemento.value * askValue;
    });
    return acumulador.toFixed(2);
  };

  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header className="wallet">
          <h4 data-testid="email-field">
            {`E-mail: ${userEmail}`}
          </h4>
          <h3 data-testid="total-field">
            { this.handleTotal()}
          </h3>
          <h3 data-testid="header-currency-field">
            BRL
          </h3>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalValue: state.wallet.expenses,
});

Wallet.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  totalValue: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Wallet);
