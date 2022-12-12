import { Link } from "react-router-dom";

function Posts({ data }) {
  return (
    <ul>
      {data.map((post) => (
        <li
          key={post.id}
          className="flex flex-col items-center justify-center"
        >
          <Link
            to={post.id.toString()}
            className="rounded-sm w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform mb-3"
          >
            <div className="col-span-12 md:col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#2563eb"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
            </div>

            <div class="col-span-11 xl:-ml-5">
              <p class="capitalize text-blue-600 font-semibold">{post.title}</p>
            </div>

            <div class="md:col-start-2 col-span-11 xl:-ml-5">
              <p class="text-sm text-gray-800 font-light">
                {post.body}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
