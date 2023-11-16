import React, { useState, useEffect } from "react";
import Coolitude from "./components/coolitude/Coolitude";
import Header from "./components/header/Header";
import Alert from "./components/alert/Alert";
import Algo from "./components/Algo/Algo";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import "./styles/index.css";

function App() {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app">
      {smallScreen ? (
        <div>
          <Navbar />
          <Header />
          <Alert />
          <Algo />
          <Coolitude />
          <Footer />
        </div>
      ) : (
        <div>
          <Coolitude />
          <Navbar />
          <Header />
          <Alert />
          <Algo />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
