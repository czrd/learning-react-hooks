import React, { useState } from 'react';

import PropTypes from 'prop-types';

export default function Register({ dispatch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handlePasswordRepeat(evt) {
    setPasswordRepeat(evt.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'REGISTER', username });
      }}
    >
      <label htmlFor="register-username">
        Username:
        <input
          id="register-username"
          name="register-username"
          type="text"
          value={username}
          onChange={handleUsername}
        />
      </label>
      <label htmlFor="register-password">
        Password:
        <input
          id="register-password"
          name="register-password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
      </label>
      <label htmlFor="register-password-repeat">
        Repeat password:
        <input
          id="register-password-repeat"
          name="register-password-repeat"
          type="password"
          value={passwordRepeat}
          onChange={handlePasswordRepeat}
        />
      </label>
      <input
        disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat}
        type="submit"
        value="Register"
      />
    </form>
  );
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
