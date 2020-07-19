import React from 'react';

import PropTypes from 'prop-types';

export default function Logout({ user, dispatch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'LOGOUT' });
      }}
    >
      Logged in as:
      {' '}
      <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};
