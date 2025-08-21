import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layout";
import About from "./components/about/about";
import Home from "./components/home/home";
import "aos/dist/aos.css";
import AOS from "aos";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    AOS.init({  duration: 800, 
    once: false,    });
  }, []);
  return <RouterProvider router={appRouter} />;
};

export default App;
