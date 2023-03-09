import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import AppJohnSmith from "./components/AppJohnSmith";
import AppChipJones from "./components/AppChipJones";
import Search from "./components/Search";
import DiscJohnSmith from "./components/DiscJohnSmith";
import ApplicantAnalytics from "./components/ApplicantAnalytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ApplicantAnalytics /> },
      { path: "/Home", element: <Home /> },
      { path: "/AppJohnSmith", element: <AppJohnSmith /> },
      { path: "/Search", element: <Search /> },
      { path: "/AppChipJones", element: <AppChipJones /> },
      { path: "/DiscJohnSmith", element: <DiscJohnSmith /> },
      { path: "/ApplicantAnalytics", element: <ApplicantAnalytics /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
