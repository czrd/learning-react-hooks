import React, { useState } from 'react';

import PropTypes from 'prop-types';

export default function Login({ dispatch }) {
  const [username, setUsername] = useState('');

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN', username });
      }}
    >
      <label htmlFor="login-username">
        Username:
        <input
          id="login-username"
          name="login-username"
          type="text"
          value={username}
          onChange={handleUsername}
        />
      </label>

      <label htmlFor="login-password">
        Password:
        <input id="login-password" name="login-password" type="password" />
      </label>

      <input type="submit" value="Login" />
    </form>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
