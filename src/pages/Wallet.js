import React from 'react';
import { connect } from 'react-redux';

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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.userInfo.user.email,
});

Wallet.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  userEmail: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(mapStateToProps)(Wallet);
