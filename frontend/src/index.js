import { store } from "./Redux/store";
import { Provider } from "react-redux";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Pages/Login/Login";
import Homepage from "./Pages/Homepage/Homepage";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
import TermsOfService from "./Pages/TermsOfService/TermsOfService";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import AfterAuthRedirect from "./Pages/AfterAuthRedirect/AfterAuthRedirect";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />,
      errorElement: <NotFound />,
    },
    {
      path: "/after-auth-redirect",
      element: <AfterAuthRedirect />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <NotFound />,
    },

    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
      errorElement: <NotFound />,
    },
    {
      path: "/terms-of-service",
      element: <TermsOfService />,
      errorElement: <NotFound />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//
