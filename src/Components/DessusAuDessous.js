import React from "react";

const DessusAuDessous = (props) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div>
        <label htmlFor={"dessus" + props.title}>dessus</label>

        <input
          type="text"
          id={"dessus" + props.title}
          className="w-28 outline-0 border border-gray-500 p-1 rounded-lg  focus:border-blue-300"
        ></input>
      </div>
      <h2>-OU-</h2>
      <div>
        <label htmlFor={"audessus" + props.title}>au-dessous</label>
        <input
          type="text"
          id={"audessus" + props.title}
          className="w-28 outline-0 border border-gray-500 p-1 rounded-lg  focus:border-blue-300"
        ></input>
      </div>
    </div>
  );
};

export default DessusAuDessous;
