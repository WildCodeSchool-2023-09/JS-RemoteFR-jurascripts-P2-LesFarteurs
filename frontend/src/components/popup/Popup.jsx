import PropTypes from "prop-types";
import "./_popup.scss";

function Popup({ trigger, setTrigger, children }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => setTrigger(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;

Popup.propTypes = {
  children: PropTypes.func.isRequired,
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.func.isRequired,
};
