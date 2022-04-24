import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  const [botaoDisable, setBotaoDisable] = useState(true);
  const num = 3;
  const [loading, setLoading] = useState(false);
  const [redirectTrue, setRedirectTrue] = useState(false);
  useEffect(() => {
    if (inputValue.length >= num) {
      setBotaoDisable(false);
    } else {
      setBotaoDisable(true);
    }
  }, [inputValue]);

  async function enviar(event) {
    event.preventDefault();
    setLoading(true);
    await createUser({ name: inputValue });
    setLoading(false);
    setRedirectTrue(true);
  }

  return (
    <div data-testid="page-login">
      { loading && <p>Carregando...</p>}
      { redirectTrue && <Redirect to="/search" />}
      <form onSubmit={ enviar }>
        <input
          type="text"
          data-testid="login-name-input"
          onChange={ (event) => setInputValue(event.target.value) }
          value={ inputValue }
        />

        <button
          type="submit"
          data-testid="login-submit-button"
          disabled={ botaoDisable }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
