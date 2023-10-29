/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
import "./_alert.scss";

const Alert = () => {
  return (
    <div className="alert">
      <img src="src/assets/img/danger.png" alt="logo_danger"></img>
      <p>Infos sur les dangers de l'océan - cliquez ici -</p>
    </div>
  );
};

export default Alert;
