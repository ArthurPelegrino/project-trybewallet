import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';
import './pagescss/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
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
  // userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
