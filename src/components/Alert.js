import React from "react";

function Alert(props) {
  return (
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Success!</strong> {props.Alert}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
