import React from "react";
import Marquee from "react-fast-marquee";
const Service = () => {
  return (
    <div
      //   style={{
      //     backgroundImage:
      //       "url()",
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "cover",
      //   }}
      //   className="bg-gradient-to-r from-[#64d9b9] to-[#1d2939] p-5 mb-5"

      className="service-container bg-gradient-to-r from-[#64d9b9] to-[#1d2939] p-5 mb-5
      sm:bg-contain bg-center "
    >
      <p className="animate-pulse text-4xl text-pretty font-bold p-5 text-center text-white ">
        What We Provide
      </p>

      <div className="carousel rounded-box mx-16 my-16 flex flex-row border bg-base-300 border-black ...">
        {/* 1 */}
        <Marquee speed={60}>
          <div className="carousel-item mx-5 my-10 card w-72 bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  shadow-xl  text-white ">
            <figure className="px-10 pt-10 rounded">
              <img
                style={{ height: "14rem" }}
                src="https://loomfabrics.com.au/wp-content/uploads/2022/11/Loom-Sewing-Classes-2.jpg"
                alt="Womens"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Womens Wear</h2>
              <p>
                We are always concern about this section to fullfill their wish
                .
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="carousel-item mx-5 my-10 card w-72 bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  shadow-xl  text-white ">
            <figure className="px-10 pt-10 rounded">
              <img
                style={{ height: "14rem" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjJ5VLtspW9RBv46qxh_uGlWWJUwTyddq2lXGZe98VERNdAreWC_Wbz6xoKxTOZfne5U&usqp=CAU"
                alt="Womens"
                className="rounded-xl "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Customize Collction </h2>
              <p className="font-serif">
                Sewtech complete customize design very effetionately .
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="carousel-item mx-5 my-10 card w-72 bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  shadow-xl text-white ">
            <figure className="px-10 pt-10 rounded">
              <img
                style={{ height: "14rem" }}
                src="https://static.vecteezy.com/system/resources/previews/003/520/812/non_2x/asian-female-fashion-designer-girl-making-designing-new-beautiful-blue-dress-clothes-with-hanger-in-studio-fashion-designer-stylish-showroom-sewing-and-tailor-concept-creative-dressmaker-stylist-photo.jpg"
                alt="Womens"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Stlish Clothing</h2>
              <p>
                Our most favourite and skill full area is stylish clothing .
              </p>
            </div>
          </div>

          {/* 4 */}

          <div className="carousel-item mx-5 my-10 card w-72 bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  shadow-xl text-white ">
            <figure className="px-10 pt-10 rounded">
              <img
                style={{ height: "14rem" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfKrYBnEa_XGuJc_lXNsPTqwfY420ap1XcQ&s"
                alt="babys"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title"> Babys Bee</h2>
              <p>Special design are for only babys .</p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Service;
