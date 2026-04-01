import React from "react";

const Navbar = ({ carts }) => {
  return (
    <div className="navbar fixed bg-white z-10 items-center justify-center">
      <div className="max-w-7xl navbar">
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-xl">
            <img className="Nav-logo" src="/assets/Nav-logo.png" alt="Logo" />
          </div>
        </div>

        <div className="navbar-center hidden md:flex bg-white">
          <ul className="menu menu-horizontal gap-10 px-1 text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-5">
          <div className="indicator bg-transparent border-none">
            <span className="indicator-item badge badge-secondary bg-purple-800">
              {carts.length}
            </span>

            <button className="btn bg-transparent border-none">
              <div>
                <img src="/assets/shopping-cart-01.png" alt="Cart Icon" />
              </div>
            </button>
          </div>

          <div className="flex justify-center items-center gap-4">
            <a className="btn p-0 bg-transparent border-none text-black underline">
              Login
            </a>
            <a className="btn bg-purple-800 rounded-full text-white">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
