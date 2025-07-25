import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./containers/Home";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
  },
];

const App: React.FC = () => {
  return (
    <Routes>
      {routeConfig.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
