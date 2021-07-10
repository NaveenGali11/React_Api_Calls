import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchingPosts = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  const HandleClick = () => {
    setIdFromBtnClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then(res => {
        // console.log(res);
        setPost(res.data);
      });
    // .catch(err => {
    //   console.log(err);
    // });
  }, [idFromBtnClick]);

  return (
    <div>
      <h2>Fetching Posts</h2>
      <input
        type="text"
        value={id}
        onChange={event => setId(event.target.value)}
      />
      <button type="button" onClick={HandleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul> */}
      {/*  {posts.map(post => ( */}
      {/*    <li key={post.id}> */}
      {/*      {post.id} */}
      {/*      {post.title} */}
      {/*    </li> */}
      {/*  ))} */}
      {/* </ul> */}
    </div>
  );
};
export default FetchingPosts;
