import ReactDOM from "react-dom/client";
import "./index.css";
import {  RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store/store.js";

import router from "./routes/router.jsx";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* <AuthProvider> */}
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* </AuthProvider> */}
  </QueryClientProvider>
);
