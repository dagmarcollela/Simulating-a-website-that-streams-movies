/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Header.css";

export default ({ dark }) => {
  return (
    <header className={dark ? "dark" : ""}>
      <div className="header--logo">
        {/* <a href="/">
            <img src="" alt="" />
        </a> */}
        <h1>Movie Stream</h1>
      </div>
      <div className="header--user">
        {/* <a href="/">
            <img src="" alt="" />
        </a> */}
        <h3>User Name</h3>
      </div>
    </header>
  );
};
