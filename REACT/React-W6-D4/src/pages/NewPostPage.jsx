import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation
} from "react-router-dom";
import { toast } from "react-toastify";

import NewPostForm from "../components/form/NewPost";
import { savePost } from "../api";

function NewPostPage() {
  const data = useActionData();

  const navigation = useNavigation();
  const navigate = useNavigate();

  function cancelHandler() {
    navigate("/posts");
  }

  return (
    <>
      <h1 className="text-1xl font-bold tracking-tight sm:text-center sm:text-6xl my-5">
        New Post
      </h1>
      {data && data.isError && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
}

export default NewPostPage;

export async function action({ request }) {
  const data = await request.formData();

  const validationError = await savePost(data);
  if (validationError) {
    return validationError;
  }
  
  const notify = () =>
    toast("New Post submitted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });

  notify();

  return redirect("/posts");
}
