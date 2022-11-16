import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import Wallet from '../pages/Wallet';

describe('', () => {
  it('Login test', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    // screen.logTestingPlaygroundURL();
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(button).toHaveAttribute('disabled');
    userEvent.type(emailInput, 'sadasdasd');
    expect(button).toHaveAttribute('disabled');
    userEvent.type(passwordInput, '123456');
    expect(button).toHaveAttribute('disabled');
    userEvent.type(emailInput, '@hotmail');
    expect(button).toHaveAttribute('disabled');
    userEvent.type(emailInput, '.com');
    expect(button).not.toHaveAttribute('disabled');
    userEvent.click(button);
    const formTest = screen.getByRole('spinbutton');
    expect(formTest).toBeInTheDocument();
    expect(history.location.pathname).toBe('/carteira');
  });
  it('WalletTest', () => {
    renderWithRouterAndRedux(<Wallet />);
    const formTest = screen.getByRole('spinbutton');
    expect(formTest).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
