import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import MainLayout from "./Dashboard/MainLayout.jsx";
import Home from "./Home.jsx";
import PrivetRoute from "./PrivetRoute.jsx";
import Context from "./Auth/Context.jsx";
import MainDasbard from "./TaskMang/MainDasbard.jsx";

import {

  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <PrivetRoute>
            <MainDasbard />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </ThemeProvider>
  </QueryClientProvider>
);
