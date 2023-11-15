import { Link } from "react-router-dom";
import "./_alert.scss";

function Alert() {
  return (
    <Link className="alert" to="/infos#dangerous">
      <img src="/danger.png" alt="logo_danger" />
      <p>Infos sur les dangers de l'océan</p>
    </Link>
  );
}

export default Alert;
