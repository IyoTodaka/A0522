import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getComments } from "../api";

const Comments = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [comments, setComments] = React.useState(null);
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  React.useEffect(() => {
    setLoading(true);
    getComments(q)
      .then(setComments)
      .catch((err) => setError(err.message))
      .finally(setLoading(false));
  }, [q]);

  return (
    <>
      {loading && <h3>Loading....</h3>}
      {error && <p>{error}</p>}
      {!error && comments && (
        <>
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl my-5">
            Comments
          </h1>
          <div className="flex justify-center">
            <ul className="bg-white rounded-lg w-96 text-gray-900">
              {comments &&
                comments.map((comment) => (
                  <li
                    key={comment.id}
                    className="px-6 py-2 border-b border-gray-200 w-full"
                  >
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                    <p>
                      <Link
                        to="/profile"
                        state={{ authorId: comment.id }}
                        className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Author
                      </Link>
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Comments;
