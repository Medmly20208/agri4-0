import React from "react";
import Styles from "./TogglerButton.module.css";

const TogglerButton = (props) => {
  return (
    <label className={Styles["switch"]} onClick={() => console.log("hello")}>
      <input type="checkbox" checked={true} />
      <span className={Styles["slider"] + " " + Styles["round"]}></span>
    </label>
  );
};

export default TogglerButton;
