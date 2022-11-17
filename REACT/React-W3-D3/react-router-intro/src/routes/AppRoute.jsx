import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Content } from "react-bulma-components";
import PostPage from "../pages/PostPage";
import Messages from "../pages/Messages";
import Chats from "../pages/Chats";

const AppRoute = () => {
  return (
    <Container breakpoint={"fluid"}>
      <Link to={{ pathname: "https://www.google.com" }} target="_blank">
        Test
      </Link>

      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:anything/" element={<PostPage />} />

          {/* Manage all nested routes in one place */}
          {/* <Route path="/messages" element={<Messages />}>
            <Route path=":id" element={<Chats />} />
          </Route> */}

          {/* Nested routes inside components */}
          <Route path="/message/*" element={<Messages />} />

          {/* DONT USE THIS PATTERN :) */}
          {/* <Route path="/messages" element={<Messages />} /> 
          <Route path="/messages/:id" element={<Chats />} />  */}
        </Routes>
      </Content>
    </Container>
  );
};

export default AppRoute;

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
