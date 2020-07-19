import React from 'react';

import PropTypes from 'prop-types';

export default function Post({ title, content, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by
        {' '}
        <b>{author}</b>
      </i>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
