import PropTypes from "prop-types";
import "./_popup.scss";

function Popup({ trigger, setTrigger }) {
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
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.bool.isRequired,
};
