import React from "react";

const NavBar = ({ totalCounters }) => {
  // al pasar props no hace falta usar this
  // al usar destructuring no hace falta usar props. Saco totalCounters de props
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
