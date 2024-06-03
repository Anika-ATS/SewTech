import React from "react";
// import { HiOutlineHome } from "react-icons/hi2";
import { IoMailOpenOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
const NavTwo = () => {
  return (
    <div>
      <footer className="footer flex flex-col md:flex-row items-center p-4 bg-gray-600 text-white text-pretty space-y-2 sm:space-y-0">
        <aside className="flex items-center space-x-4 sm:space-x-6">
          {/* <HiOutlineHome />
           */}
          <IoMailOpenOutline />
          <a href="mailto:SewTech210@gmail.com">SewTech210@gmail.com</a>

          <CiClock2 />
          <p>Sun-Thursday 8.00 am to 8.00 pm</p>
        </aside>

        <nav className="flex space-x-4 sm:ml-auto">
          <a href="https://www.instagram.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37a4 4 0 1 1-4.75-4.75 4 4 0 0 1 4.75 4.75z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a href="https://www.facebook.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default NavTwo;
