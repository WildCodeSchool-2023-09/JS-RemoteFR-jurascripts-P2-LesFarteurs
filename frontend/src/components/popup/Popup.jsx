/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./_popup.scss";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={() => props.setTrigger(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
