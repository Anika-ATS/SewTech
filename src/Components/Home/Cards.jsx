import React from "react";
import { LiaTapeSolid } from "react-icons/lia";
import { PiDressFill } from "react-icons/pi";
const Cards = () => {
  return (
    <div className="my-16  hero ">
      <div className="stats my-5 gap-4 flex flex-col sm:flex-row flex-wrap justify-center items-center ">
        {/* 1 */}
        <div className="card w-72 h-60 shadow-xl image-full">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH2u7x8vrioeeNPSpnPpbT3uRKloAgxeShA&s"
              alt="img1"
            />
          </figure>

          <div className="card-body animate-bounce">
            <h2 className=" place-items-end  mt-16 mx-20">
              <PiDressFill style={{ width: "60px", height: "40px" }} />
            </h2>
            <p className="mx-20">Stiches</p>
          </div>
        </div>

        {/* 2 */}
        <div className="card w-72  shadow-xl image-full animate-bounce">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQolzdW8S0cH4amYZiUt-ApugoDxOvsHboXiOsRsefQSlSg_nne-VI-13euOCkIHEBhU&usqp=CAU"
              alt="img2"
            />
          </figure>
          <div className="card-body mx-5 mt-20">
            <p className=" font-bold text-serif text-xl  text-white ">
              2200+ stiches{" "}
            </p>
          </div>
        </div>

        {/* 3 */}

        <div className="card w-72  shadow-xl image-full">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0_gZpnwKPgxEKoAPgIvMcaonk7Oh9UFz8g&s"
              alt="img3"
            />
          </figure>
          <div className=" card-body animate-bounce">
            <div className=" mx-20 mt-14">
              <LiaTapeSolid style={{ width: "60px", height: "40px" }} />
            </div>
            <h1 className=" mx-10 mt-3 text-serif  text-white">
              Body Measurment{" "}
            </h1>
          </div>
        </div>

        {/* 4 */}
        <div className="card w-72  shadow-xl image-full animate-bounce">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRthPC0PJosz27dmAHrAejIcgN9FyfOHABA&s"
              alt="img4"
            />
          </figure>
          <div className="card-body mt-16">
            <h2 className=" place-items-end text-2xl mx-20 ">18+</h2>
            {/* <p className="text-xl font-serif font-bold">18+</p> */}
            <p className="text-center text-xl">Proffesional Tailors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
