import React, { useContext } from "react";
import { DataContext } from "../App";

const Menu = () => {
  const { setAppPage } = useContext(DataContext);
  return (
    <div className="menu"  x="50" y="60">
      <h1>Quiz for Developer</h1>
      <button onClick={() => setAppPage("quiz")}>Let's Start</button>
    </div>
  );
};

export default Menu;
