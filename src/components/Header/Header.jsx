import React from "react";
// eslint-disable-next-line import/no-unresolved
import Logo from "assets/logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul className="menu__links">
          <li>help & support</li>
          <li>credits</li>
        </ul>
        <div className="menu__notifications">5</div>
        <div className="account">
          <div className="account__avatar">image</div>
          <div className="account__name">Melissa Stevens</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
