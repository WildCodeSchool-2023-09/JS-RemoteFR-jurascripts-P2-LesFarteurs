import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import Infos from "./pages/infos/Infos";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import Algo from "./components/Algo/Algo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: Algo.loader,
  },
  {
    path: "/home",
    element: <App />,
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
    path: "/error",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
