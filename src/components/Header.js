import React from "react";
import { Link } from "react-router-dom";

export default ({ type, content }) => (
  <header className='header'>
    <div className="container">
        <div className="header__logo">
            <Link className="header__logo" to="/">MovieFinder</Link>
        </div>
    </div>
  </header>
);
