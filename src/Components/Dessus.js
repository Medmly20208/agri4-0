import React from "react";

const Dessus = (props) => {
  let option = props.option == null ? "Au-dessus" : props.option;
  return (
    <React.Fragment>
      <label htmlFor={option + props.title}>{option}</label>
      <input
        type="text"
        id={option + props.title}
        className="outline-0 border border-gray-500 p-1 rounded-lg w-1/5 focus:border-blue-300"
      ></input>
    </React.Fragment>
  );
};

export default Dessus;
