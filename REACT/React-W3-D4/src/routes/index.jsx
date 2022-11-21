import React, { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
const HomePage = lazy(() => import("../pages/HomePage"));
const PostPage = lazy(()=> import("../pages/PostPage"));
const DashBoard = lazy(()=> import("../pages/DashBoard"));
const Register = lazy(()=> import("../pages/Register"));
const Comments = lazy(()=> import("../pages/Comments"));
const ProfilePage = lazy(()=> import("../pages/ProfilePage"));

const AppRoute = () => {
  return (
    <RootLayout>
      <div className="wrapper">
        <div className="sidebar">
          <ul className="nav">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/login" >Login</Link></li>
            <li><Link to="/register" >Register</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={
              <p>This is your home page...</p>
            } />
            <Route path="/login" element={
              <p>This is your login page...</p>
            } />
            <Route path="/register" element={
              <p>This is your register page...</p>
            } />
          </Routes>
        </div>
      </div>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="*" element={<h1>Error Page not Found!</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard name={"hoge"} />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Suspense>
    </RootLayout>
  );
};

export default AppRoute;
