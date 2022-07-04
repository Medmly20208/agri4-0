import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = (props) => {
  return (
    <div className="flex flex-row align-center items-center gap-2 p-2 cursor-pointer hover:text-purple-600">
      <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
      <h2>{props.title}</h2>
    </div>
  );
};

export default NavItem;
