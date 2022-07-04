import React, { useState } from "react";
import FormAlerthumTemp from "./FormAlerthumTemp";

const AlertItemhumtemp = (props) => {
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
        {Toggler == false ? (
          <></>
        ) : (
          <FormAlerthumTemp title={props.type}></FormAlerthumTemp>
        )}
      </div>
    </div>
  );
};

export default AlertItemhumtemp;
