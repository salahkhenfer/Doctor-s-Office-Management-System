import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./Redux/store.ts";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashbaord from "./page/Dashbaord.tsx";
import Patients from "./page/Patients.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // path: "/Dashbaord",
        element: <Dashbaord />,
      },
      {
        path: "/Patients",
        element: <Patients />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
