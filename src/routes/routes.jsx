import ChannelActivityLayout from "../components/Channel/Layouts/ChannelLayout";
import EditChannelLayout from "../components/Channel/Layouts/EditChannelLayout";
import AdminDashboard from "../pages/AdminDashboard";
import Channel from "../pages/Channel/Channel";
import ChangePassword from "../pages/Channel/Edit/ChangePassword";
import EditProfile from "../pages/Channel/Edit/EditProfile";
import Playlists from "../pages/Channel/Playlists";
import Subscriptions from "../pages/Channel/SubscribedChannels";
import Tweets from "../pages/Channel/Tweet";
import Videos from "../pages/Channel/Videos";
import Home from "../pages/Home";
import LikedVideos from "../pages/LikedVideos";
import Login from "../pages/Login";
import MyCollections from "../pages/MyCollections";
import MyContent from "../pages/MyContent";
import Playlist from "../pages/Playlist";
import Policy from "../pages/Policy";
import Register from "../pages/Register";
import SearchResults from "../pages/SearchResults";
import Subscribers from "../pages/Subscribers";
import Terms from "../pages/Terms";
import Watch from "../pages/Watch";
import WatchHistory from "../pages/WatchHistory";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search",
    element: <SearchResults />,
  },
  {
    path: "/watch/:videoId",
    element: <Watch />,
  },
  {
    path: "/playlist/:playlistId",
    element: <Playlist />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
];

const privateRoutes = [
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/liked",
    element: <LikedVideos />,
  },
  {
    path: "/history",
    element: <WatchHistory />,
  },
  {
    path: "/collection",
    element: <MyCollections />,
  },
  {
    path: "/content",
    element: <MyContent />,
  },
  {
    path: "/subscribers",
    element: <Subscribers />,
  },
  {
    path: "/channel/:username",
    element: <Channel />,
    children: [
      {
        path: "edit",
        element: <EditChannelLayout />,
        children: [
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
            path: "playlists",
            element: <Playlists />,
          },
          {
            path: "",
            element: <Videos />,
          },
        ],
      },
    ],
  },
];

export { publicRoutes, privateRoutes };
