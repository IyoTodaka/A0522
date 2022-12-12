import { Form } from "react-router-dom";

function NewPostForm({ onCancel, submitting }) {
  return (
    <Form action="/post/new" method="post">
      <div className="flex justify-center">
      <div>
        <div className="mb-3 xl:w-96">
          <input
            id="title"
            type="text"
            name="title"
            required
            minLength={5}
            className={
              "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            }
            placeholder="Post Title"
          />
        </div>
        <div className="mb-3 xl:w-96">
          <textarea
            id="text"
            name="post-text"
            required
            minLength={10}
            rows={5}
            placeholder="Post Body"
            className={
              "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white  focus:border-blue-600  focus:outline-none"
            }
          ></textarea>
        </div>
        <div className="xl:w-96">
          <button 
            className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            type="button" 
            onClick={onCancel} 
            disabled={submitting}>
            Cancel
          </button>
          <button 
            className="inline-block ml-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            disabled={submitting}>
            {submitting ? "Submitting..." : "Create Post"}
          </button>
        </div>
      </div>
      </div>
    </Form>
  );
}

export default NewPostForm;