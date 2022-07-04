import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col gap-8 m-8">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-2xl">Capteures</h1>
        <div>
          <button className="border border-gray-300 rounded-lg p-4 text-purple-500  hover:bg-gray-100">
            Paramètres d'unité
          </button>
          <button className="bg-purple-600 ml-12 border border-purple-300 rounded-lg p-4 text-white hover:bg-purple-900">
            <span className="mr-4 ">+</span>
            Ajouter un capteur ou la méteo
          </button>
        </div>
      </div>
      <div>
        <ul className="flex flex-row justify-start box-content  ">
          <li className="box-content cursor-pointer p-4  hover:bg-gray-200 hover:rounded-t-xl">
            <a hre="#">Focus</a>
          </li>
          <li className="box-content cursor-pointer p-4  hover:bg-gray-200 hover:rounded-t-xl">
            <a hre="#">Capteures</a>
          </li>
          <li className="box-content cursor-pointer p-4  hover:bg-gray-200 hover:rounded-t-xl">
            <a hre="#">Historique des alertes</a>
          </li>
          <li className="box-content cursor-pointer p-4  hover:bg-gray-200 hover:rounded-t-xl">
            <a hre="#">Archiver</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
