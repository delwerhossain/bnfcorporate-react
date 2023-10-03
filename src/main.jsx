import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Main from './Layout/Main.jsx';
import ErrorPage from './Page/ErrorPage/ErrorPage.jsx';
import ContactSection from './components/ContactSection/ContactSection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact",
        element: <ContactSection />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);