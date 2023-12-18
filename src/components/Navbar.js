import React from "react";

function Navbar() {
  const habmurger = () => {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
  };
  return (
    <div className="navbar">
      <div className="heading">E-COMM</div>
      <div className="hamburger" onClick={habmurger}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="nav">
        <ul>
          <li>
            <button>HOME</button>
          </li>
          <li>
            <button>ELECTRONICS</button>
          </li>
          <li>
            <button>BOOKS</button>
          </li>
          <li>
            <button>MUSIC</button>
          </li>
          <li>
            <button>MOVIES</button>
          </li>
          <li>
            <button>CLOTHING</button>
          </li>
          <li>
            <button>GAMES</button>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">MORE</button>
              <div className="dropdown-content">
                <a href="/">FURNITURE</a>
                <a href="/">ELECTRONICS</a>
                <a href="/">TRAVEL</a>
                <a href="/">BOTANICAL</a>
                <a href="/">CATEGORY NAME</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <input className="navInput" type="text" placeholder="Search something" />
    </div>
  );
}

export default Navbar;
