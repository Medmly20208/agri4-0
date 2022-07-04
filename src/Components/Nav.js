import React from "react";
import {
  faHome,
  faBell,
  faCheck,
  faCalendar,
  faCircleCheck,
  faCircleExclamation,
  faGear,
  faChartPie,
  faTableList,
  faNewspaper,
  faArrowAltCircleUp,
  faQuestion,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/iauditor.png";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let NavContent = [
  {
    icon: faHome,
    title: "Tableau de bord",
  },
  {
    icon: faBell,
    title: "Notifications",
  },
  {
    icon: faTableList,
    title: "Modèles",
  },
  {
    icon: faCheck,
    title: "Inspection",
  },
  {
    icon: faCalendar,
    title: "Planning",
  },
  {
    icon: faCircleCheck,
    title: "Actions",
  },
  {
    icon: faCircleExclamation,
    title: "Observation",
  },
  {
    icon: faNewspaper,
    title: "News",
  },
  {
    icon: faGear,
    title: "EdApp",
  },
  {
    icon: faArrowAltCircleUp,
    title: "Capteurs",
  },
  {
    icon: faChartPie,
    title: "Données Analytique",
  },
];

export const Nav = () => {
  return (
    <div className="text-gray-600 w-1/5 bg-custom-gray h-screen flex flex-col gap-8 items-center justify-center">
      <div>
        <img src={logo} alt="logo" className=""></img>
      </div>
      <nav className=" h-72 overflow-y-scroll  bg-custom-gray flex flex-col  gap-8">
        {NavContent.map((Item, index) => {
          return (
            <NavItem title={Item.title} icon={Item.icon} key={index}></NavItem>
          );
        })}
      </nav>

      <button className="text-white w-4/5 h-24 p-2 mx-auto bg-green-600 rounded-2xl hover:bg-green-900">
        Acheter l'offre Premium
      </button>
      <div className="m-2 flex felx-row items-center gap-16 cursor-pointer">
        <div className="flex flex-row items-center gap-2 ">
          <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
          <h1>Aide</h1>
        </div>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </div>
      <div className="mb-8 flex flex-row items-center gap-16 cursor-pointer">
        <div className="flex flex-row items-center gap-2 ">
          <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
          <h1>Team</h1>
        </div>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </div>
    </div>
  );
};
