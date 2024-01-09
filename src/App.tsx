import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import Loadable from 'react-loadable';
// import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";

import Home from "./containers/Home";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
];

function App() {
  return (
    <Routes>
      {routeConfig.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
