import React from 'react';

import PropTypes from 'prop-types';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

export default function UserBar({ user, dispatch }) {
  if (user) {
    return <Logout dispatch={dispatch} user={user} />;
  }

  return (
    <>
      <Login dispatch={dispatch} />
      <Register dispatch={dispatch} />
    </>
  );
}

UserBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};
