import React from "react";
// import { MdOutlineDoubleArrow } from "react-icons/md";
const About = () => {
  return (
    <div className="mx-10 my-10 rounded-md">
      <div className=" hero min-h-screen  p-6 bg-gradient-to-r from-[#64d9b9] to-[#1d2939] ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-col">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBC3EDId1Z_c6xlNcEAKh4KiqfioVVEQBrcVKV4IjWp_pdYczje4PXHfladU4iAGakzbs&usqp=CAU"
              //   className="skeleton mx-10 mt-4  max-w-sm rounded-lg shadow-2xl"
              className="skeleton mx-10 mt-4 max-w-full lg:max-w-md rounded-lg shadow-2xl"
            />
            <img
              src="https://www.hunarcourses.com/blog/wp-content/uploads/2019/07/Title-Image-1.png"
              //   className=" mt-10  max-w-sm rounded-lg shadow-2xl"
              className="mt-10 max-w-full lg:max-w-md rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-center lg:text-left lg:ml-10">
            <h1
              // className="text-3xl font-bold text-white"
              className="text-3xl lg:text-4xl font-bold text-white mb-2"
            >
              Meet with the best quality Tailors!
            </h1>
            <p className="py-4 font-serif text-white animate-pulse">
              Welcome to SewTech.At SewTech, we believe in more than just sewing
              clothes—we believe in crafting memories. Our passion lies in
              transforming your vision into reality, ensuring that every stitch
              carries a piece of your story.
              <br />
              {""} We are dedicated to bringing our clients' ideas to life,
              whether through custom-made designs or our selection of
              ready-to-wear fashion. Our goal is to blend the latest trends with
              your unique style, providing you with garments that are not only
              fashionable but also meaningful.
              <br /> Thank you for choosing SewTech. Let’s create something
              beautiful together!
            </p>
            <h1 className="text-xl text-pretty font-bold text-white">
              ---Our Services---
            </h1>
            <ul className="font-serif text-pretty text-white font-xl p-2 ">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white me-2"
                />
                <li>Fashion Forward</li>
              </div>
              <br />
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white me-2"
                />
                <li>Personalized Touch</li>
              </div>{" "}
              <br />
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white me-2"
                />
                <li>Versatile Styles</li>
              </div>{" "}
              <br />
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white me-2"
                />
                <li>Elegant Simplicity</li>
              </div>{" "}
              <br />
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white me-2"
                />
                <li>Tailored Elegance</li>
              </div>{" "}
              <br />
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white me-2"
                />
                <li>Cheap Rate</li>{" "}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
