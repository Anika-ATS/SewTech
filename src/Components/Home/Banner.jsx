import React from "react";
import NavTwo from "./NavTwo";
// import NavTwo from "./NavTwo";

const Banner = () => {
  return (
    <div>
      <div className=" w-full">
        <div
          className="hero min-h-screen  w-full   "
          style={{
            backgroundImage:
              "url(https://cdn.shopify.com/s/files/1/0625/2639/0491/files/person-hand-sewing-material.jpg?v=1696883061)",
          }}
        >
          <div className="hero-overlay bg-opacity-80">
            {" "}
            <div className="form-control mr-2 w-full sm:w-2/3 md:w-1/3 mt-4 mx-auto">
              <input
                type="text "
                placeholder="Search"
                className=" input input-bordered w-full sm:w-auto ml-3 mb-5"
              />
            </div>
          </div>
          <div className="  hero-content  text-neutral-content">
            <div className="mt-2 text-center sm:text-left ">
              <p className=" ">
                {/* <h1 className="">
                  <span className="w-full p-2 animate-pulse  text-[#64d9b9] to-[#1d2939] mb-2   font-bold text-2xl  font-serif  sm:text-md w-2/3">
                    Stitch By Stitch, We Create Not Just Garments But Memories
                  </span>
                </h1> */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#64d9b9] mb-2 animate-pulse">
                  Stitch By Stitch, We Create Not Just Garments But Memories
                </h1>
                <br />
                <span className="w-full p-1 animate-pulse  text-white  font-bold text-lg  font-serif mb-5">
                  So let's give your thoughts a chance to make a memory with
                  us!!
                </span>
              </p>

              <button className="btn mt-10 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] text-white text-xl">
                Book Appointment
              </button>

              {/* foot */}
              {/* <button className="btn  mt-10 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] text-white text-xl ">
                Book Appointment
              </button> */}
            </div>
          </div>
        </div>
        {/* <div className="-mt-12">
          <NavTwo></NavTwo>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
