import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import { getPost } from "../api";

const PostPage = () => {
  const post = useLoaderData();

  return (
    <>
      <>
        <h1 className="text-1xl font-bold tracking-tight sm:text-center sm:text-6xl my-5">
          {post.title}
        </h1>
        <p>{post.body}</p>
        <br />
        <hr />
        <br />
        <Link to={`/comments?q=${post.id}`}>Read Comments</Link>
      </>
    </>
  );
};

export default PostPage;

export const loader = ({ params }) => {
  const postId = params.postId;
  return getPost(postId);
};
