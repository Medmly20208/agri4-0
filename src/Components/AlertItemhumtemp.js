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
            className={
              "toggler" +
              (Toggler == true ? "active" : "Inactive") +
              " z-50 cursor-pointer"
            }
          >
            <div
              className={"slider" + (Toggler == true ? "Inactive" : "active")}
            ></div>
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
