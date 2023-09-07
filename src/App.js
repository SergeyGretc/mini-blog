import React from "react";
import PostsPage from "./MainPage";
import { Route } from "react-router";
import { Routes } from "react-router";
import MainNavigation from "./MainNavigation";
import Contakts from "./Contakts";
import AboutUs from "./AboutUs";
import Redirector from "./Redirector";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<Redirector />} />;
        <Route exact path="/posts/:postId?" element={<PostsPage />} />;
        <Route exact path="/contakts" element={<Contakts />} />;
        <Route exact path="/aboutUs" element={<AboutUs />} />;
      </Routes>
    </>
  );
}

export default App;
