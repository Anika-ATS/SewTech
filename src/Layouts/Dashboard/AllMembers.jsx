import React from "react";
import { useEffect, useState } from "react";

import SingleMembarCardDash from "../Dashboard/SingleMembarCardDash";

const AllMembers = () => {
  const [membars, setMembars] = useState([]);
  useEffect(() => {
    fetchMembars();
  }, []);

  const fetchMembars = async () => {
    const response = await fetch("http://localhost:3000/membar");
    const data = await response.json();
    setMembars(data);
  };

  // useEffect(() => {
  //   fetch("http://localhost:3000/bags/")
  //     .then((res) => res.json())
  //     .then((data) => setBags(data));
  // }, []);

  const handleDeleteProduct = (id) => {
    setMembars(membars.filter((membar) => membar.id !== id));
  };

  return (
    <div>
      <div className="mx-20 me-5 ">
        <h1 className="text-3xl  p-2 font-bold text-center mx-16 mb-5 mt-3 text-emerald-900">
          All Produts
        </h1>
        {/* className=" grid grid-cols-2 gap-10" */}
        <div className=" flex flex-wrap gap-10">
          {membars.map((membar) => (
            // <SingleProductCardDashboard
            <SingleMembarCardDash
              key={membar.id}
              bag={membar}
              onDelete={handleDeleteProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMembers;
