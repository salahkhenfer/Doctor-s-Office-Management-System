import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./Redux/store.ts";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashbaord from "./page/Dashbaord.tsx";
import Patients from "./page/Patients.tsx";
import Profile from "./page/Profile.tsx";
import EditPage from "./page/EditPage.tsx";
import MedicalHistory from "./page/MedicalHistory.tsx";
import Messages from "./page/Messages.tsx";
import Appointment from "./page/Appointment.tsx";
import LoginOrSginin from "./page/LoginOrSignup.tsx";
import PatientDetails from "./page/PatientDetails.tsx";
const router = createBrowserRouter([
  {
    path: "/App",
    element: <App />,

    children: [
      {
        index: true,
        // path: "/Dashbaord",
        element: <Dashbaord />,
      },
      {
        path: "/App/Patients",
        element: <Patients />,
      },
      {
        path: "/App/Profile",
        element: <Profile />,
      },
      {
        path: "/App/Profile/EditPage",
        element: <EditPage />,
      },
      {
        path: "/App/MedicalHistory",
        element: <MedicalHistory />,
      },
      {
        path: "/App/Messages",
        element: <Messages />,
      },
      {
        path: "/App/Appointment",
        element: <Appointment />,
      },

      {
        path: "/App/PatientDetails",
        element: <PatientDetails />,
      },
    ],
  },
  {
    // index: true,
    path: "/",
    element: <LoginOrSginin />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
