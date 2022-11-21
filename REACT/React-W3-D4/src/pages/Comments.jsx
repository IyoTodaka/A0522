import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getComments } from "../api";

const Comments = () => {
  const [comments, setComments] = React.useState(null);
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  React.useEffect(() => {
    getComments(q).then(setComments);
  }, [q]);

  return (
    <ul>
      {comments &&
        comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
            <p>
                <Link to="/profile" state={{ authorId: comment.id }} >
                    Author
                </Link>
            </p>
            <hr/>
          </li>
        ))}
    </ul>
  );
};

export default Comments;
