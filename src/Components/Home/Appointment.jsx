import React from "react";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

// import { Controller, useForm } from "react-hook-form";
const Appointment = () => {
  const staticId = "my-static-id";
  const [submitted, setSubmitted] = useState(false);
  const auth = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!auth.isLoggedIn) {
      alert("Please log in first to submit the order.");
      return;
    }

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const garmentType = formData.get("garmentType");
    const description = formData.get("description");
    const referenceImages = [...formData.getAll("referenceImages")]; // Get all uploaded images

    try {
      const response = await fetch("/submit-order", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          garmentType,
          description,
          referenceImages,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Server error");
      }
    } catch (err) {
      console.error(err.message);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <div className="p-20">
      <div
        className=" hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0625/2639/0491/files/person-hand-sewing-material.jpg?v=1696883061)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content flex flex-col  lg:flex-row-reverse w-full lg:w-4/5 xl:w-3/5 mx-auto">
          <div
            id={staticId}
            className="card flex-shrink-0 w-full lg:w-full max-w-sm lg:max-w-full shadow-2xl bg-base-100 mx-4 lg:mx-0 p-5 h-[800px]"
          >
            <h1 className="mt-5 p-2 shadow-2xl group-hover: text-bold text-2xl mx-auto bg-gradient-to-r from-[#64d9b9] to-[#1d2939] text-white rounded">
              Book Your Appointment
            </h1>
            <form className="card-body" onSubmit={handleSubmit}>
              {/* Your Information */}
              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Phone Number (Optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="input input-bordered"
                  name="phone"
                />
              </div>

              {/* Order Details */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Garment Type</span>
                </label>
                <select
                  className="select input input-bordered"
                  name="garmentType"
                  required
                >
                  <option value="">-- Select Garment Type --</option>
                  <option value="shirt">Shirt</option>
                  <option value="pants">Pants</option>
                  <option value="dress">Dress</option>
                  <option value="suit">Suit</option>
                  {/* Add more garment types as needed */}
                </select>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Describe Your Request</span>
                </label>
                <textarea
                  placeholder="Describe the style, fabric, and any specific details of your desired garment"
                  className="textarea textarea-bordered h-24"
                  name="description"
                  required
                />
              </div>
              <div className="mt-3 ">
                <div className="form-control ">
                  <input
                    type="file"
                    className="file-input file-input-bordered mt-1"
                    name="referenceImages"
                    multiple
                    accept="image/*"
                  />
                </div>

                {/* Submission */}
                <div className="form-control mt-2 text-white sm:mb-2 ">
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-[#64d9b9] to-[#1d2939]
                     text-white"
                    disabled={!auth.isLoggedIn}
                    style={{ color: "white" }}
                  >
                    Submit Order
                  </button>
                </div>
              </div>

              {submitted && (
                <div className="mt-6 text-green-500">
                  Your order has been submitted successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
