import React from "react";
import { useLoaderData } from "react-router-dom";

import { getPosts } from "../api";
import Posts from "../components/posts/Posts";

const PostPage = () => {
  const posts = useLoaderData()
  return <Posts data={posts} />
};

export default PostPage;

export const loader = () => {
  return getPosts()
}
