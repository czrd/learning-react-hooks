import React, { useState } from 'react';

import PropTypes from 'prop-types';

export default function CreatePost({ user, dispatch }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleTitle(evt) {
    setTitle(evt.target.value);
  }

  function handleContent(evt) {
    setContent(evt.target.value);
  }

  function handleCreate() {
    dispatch({
      id: new Date().getUTCMilliseconds(),
      type: 'CREATE_POST',
      title,
      content,
      author: user,
    });
    setTitle('');
    setContent('');
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author:
        {' '}
        <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">
          Title:
          <input
            id="create-title"
            name="create-title"
            type="text"
            value={title}
            onChange={handleTitle}
          />
        </label>
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  );
}

CreatePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};
