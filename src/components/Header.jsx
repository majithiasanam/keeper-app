import React from "react";
import KeeperLogo from '../res/keep.png';

const heading = "Keeper";

function Header() {
  return (
    <header>
      <img src={KeeperLogo} alt="Keeper Icon" />
      <h1>{heading}</h1>
    </header>
  );
}

export default Header;
