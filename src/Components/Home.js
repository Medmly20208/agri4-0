import React, { useState } from "react";
import { Nav } from "./Nav";
import Main from "./Main";
const Home = () => {
  return (
    <div className="flex flex-row items-stretch	 ">
      <div className="fixed inset-0 ">
        <Nav></Nav>
      </div>
      <Main></Main>
    </div>
  );
};

export default Home;
