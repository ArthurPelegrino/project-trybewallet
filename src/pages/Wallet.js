import React from 'react';
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

export default connect(mapStateToProps)(Wallet);
