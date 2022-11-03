import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">
            {`E-mail: ${userEmail}`}
          </h4>
          <h3 data-testid="total-field">
            0
          </h3>
          <h3 data-testid="header-currency-field">
            BRL
          </h3>
        </header>
        <WalletForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
