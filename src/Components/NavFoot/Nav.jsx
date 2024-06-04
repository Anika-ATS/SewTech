import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Nav = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="navbar  bg-gradient-to-r from-[#64d9b9] to-[#1d2939] text-white py-5 px-10 opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  mt-5 z-[5] bg-gradient-to-r from-[#64d9b9] to-[#1d2939] text-black font-bold p-2  rounded-box w-52"
          >
            <li>
              <Link to="/">
                {" "}
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link to="/About">
                {" "}
                <a>About Us</a>
              </Link>
            </li>

            <li>
              <a>Services</a>
              <ul className="p-2 text-pretty">
                <li>
                  <Link to="/Services">
                    {" "}
                    <a>Our Services</a>
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/Adult">
                    {" "}
                    <a>Womens Weardrobe</a>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/Kids">
                    {" "}
                    <a>Childs</a>
                  </Link>
                </li>
                <li>
                  <Link to="/Customize">
                    {" "}
                    <a>Customize</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/Gallery">
                {" "}
                <a>Gallery</a>
              </Link>
            </li>

            <li>
              <Link to="/Team">
                {" "}
                <a>Team</a>
              </Link>
            </li>

            {user && (
              <li>
                <Link to="/dashboard">
                  <a>DashBoard</a>
                </Link>
              </li>
            )}

            {!user && (
              <>
                <li>
                  <Link to="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link to="/signin">
                    <a>Register</a>
                  </Link>
                </li>
              </>
            )}

            {user && (
              <li>
                <button className="btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-base-100 text-2xl font-serif font-bold">
          SewTech
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-white  menu menu-horizontal px-2">
          <li>
            <Link to="/">
              {" "}
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link to="/About">
              {" "}
              <a>About Us</a>
            </Link>
          </li>

          <li>
            <details>
              <summary>Services</summary>
              <ul className=" p-4 shadow menu dropdown-content   z-[1] bg-white text-black font-bold rounded-box w-52">
                <li>
                  <Link to="/Services">
                    {" "}
                    <a>Our Services</a>
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/Adult">
                    {" "}
                    <a>Womens Weardrobe</a>
                  </Link>{" "}
                </li>

                <li>
                  <Link to="/Kids">
                    {" "}
                    <a>Childs</a>
                  </Link>
                </li>
                <li>
                  <Link to="/Customize">
                    {" "}
                    <a>Customize</a>
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link to="/Gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link to="/Team">
              {" "}
              <a>Team</a>
            </Link>
          </li>

          {/* if user here */}
          {user && (
            <li>
              <Link to="/dashboard">
                <a>DashBoard</a>
              </Link>
            </li>
          )}
          {!user && (
            <>
              <li>
                <Link to="/login">
                  <a>Login</a>
                </Link>
              </li>

              <li>
                <Link to="/signin">
                  <a>Register</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <button
            onClick={handleLogout}
            className=" text-white font-serif font-bold me-5"
          >
            Logout
          </button>
        )}
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-black">
            {/* user?.photoURL || */}
            <img src={user?.photoURL || "  /public/placeholder.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
