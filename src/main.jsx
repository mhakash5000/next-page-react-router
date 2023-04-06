import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:'books',
        element:<Books/>
      },
      {
        path: "about",
        element: <About/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
