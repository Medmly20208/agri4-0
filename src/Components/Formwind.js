import React from "react";
import Dessus from "./Dessus";

const Formwind = (props) => {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl">
      <form>
        <div className="pl-4 pr-4 mb-6 ">
          <div className="flex flex-col justify-start mb-4">
            <Dessus title={props.title}></Dessus>
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

export default Formwind;
