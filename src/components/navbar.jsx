import React from "react";

//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered ");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="foo">
        Navbar <span>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
