import React, { useReducer, useEffect } from 'react';

import CreatePost from './post/CreatePost';
import PostList from './post/PostList';
import appReducer from './reducers';
import UserBar from './user/UserBar';

const defaultPosts = [
  {
    id: 1,
    title: 'React Hooks',
    content: 'The greatest thing since sliced bread!',
    author: 'Daniel Bugl',
  },
  {
    id: 2,
    title: 'Using React Fragments',
    content: 'Keeping the DOM tree clean!',
    author: 'Daniel Bugl',
  },
];

export default function App() {
  const [state, dispatch] = useReducer(appReducer, { user: '', posts: defaultPosts });
  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = 'React Hooks Blog';
    }
  }, [user]);

  return (
    <div style={{ padding: 8 }}>
      <UserBar dispatch={dispatch} user={user} />
      <br />
      {user && <CreatePost dispatch={dispatch} user={user} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}
