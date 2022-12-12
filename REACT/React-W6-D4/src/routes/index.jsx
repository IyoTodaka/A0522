import React, { lazy, Suspense } from "react";
import {
  Routes,
  Route,
  Link,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import NewPostPage from "../pages/NewPostPage";
import { loader as PostDetailPage } from "../pages/PostPage";
import { loader as PostLoader } from "../pages/PostsPage";
import { action as NewPostAction } from "../pages/NewPostPage";

const HomePage = lazy(() => import("../pages/HomePage"));
const PostsPage = lazy(() => import("../pages/PostsPage"));
const PostPage = lazy(() => import("../pages/PostPage"));
const DashBoard = lazy(() => import("../pages/DashBoard"));
const Register = lazy(() => import("../pages/Register"));
const Comments = lazy(() => import("../pages/Comments"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<h1>Error Page not Found!</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashBoard name={"hoge"} />} />
      <Route path="/posts" element={<PostsPage />} loader={PostLoader} />
      <Route path="/posts/:postId" element={<PostPage />} loader={PostDetailPage} />
      <Route path="/post/new" element={<NewPostPage />} action={NewPostAction} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Route>
  )
);

const AppRoute = () => {
  return (
      <Suspense fallback={<h1>Loading....</h1>}>
        <ToastContainer />
        <RouterProvider router={router}/>
      </Suspense>
  );
};

export default AppRoute;
