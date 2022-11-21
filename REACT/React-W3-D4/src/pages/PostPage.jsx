import React from "react";
import { useParams, Link } from "react-router-dom";

import { getPost } from "../api";

const PostPage = () => {
  const [post, setPost] = React.useState(null);
  const { postId } = useParams();

  React.useEffect(() => {
    getPost(postId).then(setPost)
  }, [postId])

  if(!post){
    return <h1>Loading....</h1>
  }

  return(
    <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <br/>
        <hr/>
        <br/>
        <Link to={`/comments?q=${postId}`}>Read Comments</Link>
    </>
  )
};

export default PostPage;
