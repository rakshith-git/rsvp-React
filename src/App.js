import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./home";
import About from "./components/about";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  router,
  Link,
  Outlet,
} from "react-router-dom";

let count = 0;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Link to="/"></Link>
        <Link to="/about"></Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default App;
