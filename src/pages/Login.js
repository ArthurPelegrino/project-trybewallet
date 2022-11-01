import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAction } from '../redux/actions';

class Login extends React.Component {
  state = {
    myUser: '',
    myPassword: '',
    button: true,
  };

  handleVerify = ('keyup', () => {
    const { myPassword, myUser } = this.state;
    const myNumber = 5;
    if (myPassword.length > myNumber && this.validatorEmail(myUser) === true) {
      this.setState({
        button: false,
      });
    } else {
      this.setState({
        button: true,
      });
    }
  });

  validatorEmail = (email) => {
    const teste = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return teste.test(email);
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.handleVerify());
  };

  render() {
    const { dispatch, history: { push } } = this.props;
    const { button, myPassword, myUser } = this.state;
    // console.log(myUser);
    // console.log(dispatch);
    return (
      <div>
        <form>
          <div>
            <h4>E-mail</h4>
            <input
              type="text"
              data-testid="email-input"
              name="myUser"
              value={ myUser }
              onChange={ this.handleChange }
            />
          </div>
          <div>
            <h4>Password</h4>
            <input
              type="password"
              name="myPassword"
              value={ myPassword }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </div>
          <button
            type="button"
            disabled={ button }
            onChange={ this.handleChange }
            onClick={ () => dispatch(emailAction(myUser), push('/carteira')) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(null)(Login);
