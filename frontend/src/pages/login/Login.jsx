import Coolitude from "../../components/coolitude/Coolitude";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./_login.scss";

function Login() {
  return (
    <>
      <Coolitude />
      <Navbar />
      <div className="login"> Login</div>
      <Footer />
    </>
  );
}

export default Login;
