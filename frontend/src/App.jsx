import Coolitude from "./components/coolitude/Coolitude";
import Header from "./components/header/Header";
import Alert from "./components/alert/Alert";
import Algo from "./components/Algo/Algo";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Coolitude />
      <Navbar />
      <Header />
      <Alert />
      <Algo />
      <Footer />
    </div>
  );
}

export default App;
