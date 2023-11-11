import React from "react";
import Coolitude from "./components/coolitude/Coolitude";
import Header from "./components/header/Header";
import Alert from "./components/alert/Alert";
import Algo from "./components/Algo/Algo";
import Burger from "./components/burger/Burger";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/index.css";

function App() {
  return (
    <div className="app">
      <Coolitude />
      <Navbar />
      <Burger />
      <Header />
      <Alert />
      <Algo />
      <Footer />
    </div>
  );
}

export default App;
