import React from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/getPost";

const PostPage = () => {
  const [post, setPost] = React.useState(null);
  const { anything } = useParams();

  React.useEffect(() => {
    getPost(anything).then(setPost)
  }, [anything])

  if(!post){
    return <h1>Loading....</h1>
  }

  return(
    <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </>
  )
};

export default PostPage;
