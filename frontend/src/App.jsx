/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Coolitude from "./components/coolitude/Coolitude";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import Spots from "./components/spots/Spots";
import Array from "./components/array/Array";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Infos from "./pages/infos/Infos";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import "./styles/index.css";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Coolitude />
        <Navbar />
        <Header />
        <Filters />
        <Spots />
        <Array />
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
