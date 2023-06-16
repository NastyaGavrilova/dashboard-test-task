import React from "react";
import "./_button.scss";
const Button = ({ status }) => {
  return (
    <button
      className={`button-cell ${status === "Inactive" ? "inactive" : "active"}`}
    >
      <span className="button-cell__text">{status}</span>
    </button>
  );
};

export default Button;
