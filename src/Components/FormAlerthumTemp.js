import React, { useState } from "react";
import Dessus from "./Dessus";
import DessusAuDessous from "./DessusAuDessous";

const FormAlerthumTemp = (props) => {
  const [Option, setOption] = useState("Au-dessus");
  const ChangeHandler = (event) => {
    setOption(event.target.value);
  };
  return (
    <div className="bg-white border border-gray-300 rounded-2xl">
      <form>
        <div className=" p-4 border-b mb-2">
          <fieldset
            onChange={ChangeHandler}
            className="flex flex-row justify-start gap-4 items-center"
          >
            <div>
              <input
                className="m-2"
                type="radio"
                id="au-dessus"
                value="au-dessus"
                name="alerteTemp"
              ></input>
              <label htmlFor="au-dessus">Au-dessus</label>
            </div>
            <div>
              <input
                className="m-2"
                type="radio"
                id="en-dessous"
                value="en-dessous"
                name="alerteTemp"
              ></input>
              <label htmlFor="en-dessous">En-dessous</label>
            </div>
            <div>
              <input
                className="m-2"
                type="radio"
                id="Dessus-ou-dessous"
                value="Dessus-ou-dessous"
                name="alerteTemp"
              ></input>
              <label htmlFor="Dessus-ou-dessous">Dessus ou dessous</label> 
            </div>
          </fieldset>
        </div>
        <div className="pl-4 pr-4 mb-6 ">
          <div className="flex flex-col justify-start mb-4">
            {Option != "Dessus-ou-dessous" ? (
              <Dessus option={Option} title={props.title}></Dessus>
            ) : (
              <DessusAuDessous title={props.title}></DessusAuDessous>
            )}
          </div>
          <div className="flex flex-col justify-start mb-4">
            <label htmlFor={"selectTime" + props.title}>Pendant plus de </label>
            <select
              id={"selectTime" + props.title}
              className="outline-0 border border-gray-500 p-1 rounded-lg w-1/4 focus:border-blue-300"
            >
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
              <option value="120">120 minutes</option>
            </select>
          </div>
          <div className="flex flex-col justify-start">
            <label htmlFor={"notification" + props.title}>
              Envoyer une notification
            </label>
            <input
              type="text"
              id={"notification" + props.title}
              className="outline-0 border border-gray-500 p-1 rounded-lg w-2/5 focus:border-blue-300"
            ></input>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="border border-purple-200 rounded-xl m-2 text-white p-4 bg-purple-400 hover:bg-purple-900"
          >
            Enregistrer
          </button>
          <button
            type="submit"
            className="border border-gray-200 rounded-xl m-2 text-purple-800 p-4 bg-white hover:bg-gray-100"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAlerthumTemp;
