import React, { useState } from "react";
import Formwind from "./Formwind";

const AlertItemWind = (props) => {
  const [Toggler, setToggler] = useState(false);

  const toggleHandler = () => {
    setToggler((prev) => !prev);
  };
  return (
    <div className="mt-4 w-full border border-gray-300 rounded-2xl bg-gray-200 p-8">
      <div className="flex flex-row justify-start gap-2 ">
        <div>
          <div
            onClick={toggleHandler}
            className="cursor-pointer border rounded-xl border-purple-500 bg-purple-500 p-4 mb-2 text-white hover:bg-purple-300 hover:border-purple-300"
          >
            Toggle
          </div>
        </div>
        <div className="text-sm ">
          <h1 className="font-bold">Alerte {props.title}</h1>
          <h2>
            Alerte <span className="font-semibold">ARRET</span>
          </h2>
        </div>
      </div>
      <div>
        {Toggler == false ? <></> : <Formwind title={props.title}></Formwind>}
      </div>
    </div>
  );
};

export default AlertItemWind;
