import React from "react";
import { LuPhoneCall } from "react-icons/lu";
const NeedT = () => {
  return (
    <div className="my-16 p-5 hero  bg-gradient-to-r from-[#64d9b9] to-[#1d2939] text-white ">
      <footer className="footer flex flex-col lg:flex-row items-center justify-between p-4 text-white">
        <aside className=" flex-col items-center lg:flex-row lg:items-center gap-2 ">
          <div className="flex flex-row gap-2 items-center">
            <LuPhoneCall style={{ width: "60px", height: "60px" }} />
            <p className="p-2 mb-2 text-3xl font-bold">Need Us? Call---:</p>
          </div>
          <div>
            {" "}
            <h1 className="p-4 mb-2 text-xl font-bold">+88 01367745678</h1>
          </div>
        </aside>
        <div className="my-4 lg:my-0">
          <img
            className="w-28 mask mask-decagon ring ring-primary ring-offset-base-100 ring-offset-2  animate-bounce "
            src="https://as1.ftcdn.net/v2/jpg/05/73/46/34/1000_F_573463407_SbRcd1pSW5q3ueeeZQHQWTvHAUW0wbjs.jpg"
            alt=""
          />
        </div>

        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
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

export default NeedT;
