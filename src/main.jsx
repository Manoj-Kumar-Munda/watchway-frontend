import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Watch from "./pages/Watch.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Channel from "./pages/Channel/Channel.jsx";
import EditChannelInfo from "./pages/Channel/Edit/EditChannelInfo.jsx";
import ChangePassword from "./pages/Channel/Edit/ChangePassword.jsx";
import EditProfile from "./pages/Channel/Edit/EditProfile.jsx";
import ChannelActivityLayout from "./pages/Channel/Layouts/ChannelLayout.jsx";
import EditChannelLayout from "./pages/Channel/Layouts/EditChannelLayout.jsx";
import Videos from "./pages/Channel/Videos.jsx";
import Subscriptions from "./pages/Channel/SubscribedChannels.jsx";
import Tweets from "./pages/Channel/Tweet.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Policy from "./pages/Policy.jsx";
import Terms from "./pages/Terms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "channel",
        element: <Channel />,
        children: [
          {
            path: "edit",
            element: <EditChannelLayout />,
            children: [
              {
                path: "channel-info",
                element: <EditChannelInfo />,
              },
              {
                path: "change-password",
                element: <ChangePassword />,
              },
              {
                path: "",
                element: <EditProfile />,
              },
            ],
          },
          {
            path: "",
            element: <ChannelActivityLayout />,
            children: [
              {
                path: "subscribed-channels",
                element: <Subscriptions />,
              },
              {
                path: "tweets",
                element: <Tweets />,
              },
              {
                path: "",
                element: <Videos />,
              },
            ],
          },
        ],
      },
      {
        path: "policy",
        element: <Policy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
