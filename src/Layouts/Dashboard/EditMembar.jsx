import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const EditMembar = () => {
  const membar = useLoaderData();

  const [title, setTitle] = useState(membar.title);
  const [serial, setSerial] = useState(membar.price);
  const [post, setPost] = useState(membar.brand);
  // const [_id, setId] = useState(membar._id);
  const [description, setDescription] = useState(membar.description);
  const [image_url, setImageURL] = useState(membar.image_url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = e.target;

      const title = form.title.value;
      const post = form.post.value;
      const serial = form.serial.value;
      const description = form.description.value;
      const image_url = form.image_url.value;

      const data = { title, post, serial, description, image_url };

      const response = await fetch(
        `http://localhost:3000/membar/${membar._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({ title: "Edited Succesfully!", color: "#64d9b9" });
          form.reset();
        });

      if (response.ok) {
        const result = await response.json();

        console.log("Success:", result);
      } else {
        console.error("Failed to submit:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-emerald-800 text-center">
        Update a Product
      </h1>

      <div className="my-10 mx-5 ">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100  text-emerald-800 text-bold p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-800 rounded-lg"
              type="text"
              name="post"
              placeholder="Post"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
              type="number"
              name="serial"
              placeholder="Serial"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          {/* <div className="mt-2">
            <input
              className="bg-gray-100 text-emerald-800 text-bold p-4 w-full border border-emerald-900 rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div> */}

          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-1/3 items-center bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  text-white text-xl mb-3"
              type="submit"
              value="Update Membar"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press update if you are sure to update.</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-gradient-to-r from-[#64d9b9] to-[#1d2939]  text-white text-xl">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMembar;
