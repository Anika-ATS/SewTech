import React from "react";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const AddMember = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    // const id = form.id.value;
    const title = form.title.value;
    const post = form.post.value;
    const serial = form.serial.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { title, post, serial, description, image_url };

    await fetch("http://localhost:3000/membar", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        Swal.fire({ title: "Membar Added Succesfully!", color: "#64d9b9" });
        form.reset();
      });
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-emerald-800 text-center">
          Add a Tailor
        </h1>

        <div className="my-10 mx-5 ">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                className="bg-gray-100  text-emerald-800 text-bold p-4 w-full border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Name"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-800 rounded-lg"
                type="text"
                name="post"
                placeholder="Post"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
                type="number"
                name="serial"
                placeholder="ID Number"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            <div className="mt-2">
              <input
                className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image URL"
              />
            </div>
            {/* <div className="mt-2">
              <input
                className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
              /></div> */}

            <div className="mt-2 flex justify-center items-center">
              <input
                className="btn mt-4 w-1/3 items-center bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  text-white text-xl mb-3"
                type="submit"
                value="Add Membar"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              />
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press Add if you are sure to add.</p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  text-white text-xl">
                        Add
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
