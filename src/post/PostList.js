import React from 'react';

import PropTypes from 'prop-types';

import Post from './Post';

export default function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((p) => (
        <React.Fragment key={p.id}>
          <Post author={p.author} content={p.content} title={p.title} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
};
