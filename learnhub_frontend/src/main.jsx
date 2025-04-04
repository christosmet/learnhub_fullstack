import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LoginForm from "./components/LoginForm";
import Courses from "./components/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Κύριο layout (περιέχει Navbar, Footer κλπ.)
    // errorElement: <ErrorPage />, // Global error page
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
