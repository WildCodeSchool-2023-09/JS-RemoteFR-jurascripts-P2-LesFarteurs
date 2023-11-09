/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Coolitude from "./components/coolitude/Coolitude";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Alert from "./components/alert/Alert";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Infos from "./pages/infos/Infos";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Algo from "./components/Algo/Algo";

import "./styles/index.css";
import Burger from "./components/burger/Burger";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Coolitude />
        <Navbar />
        <Burger />
        <Header />
        <Alert />
        <Algo />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/infos",
          element: <Infos />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
