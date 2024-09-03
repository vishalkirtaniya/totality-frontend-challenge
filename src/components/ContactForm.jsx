"use client";

import React from "react";
import { useFormData } from "herotofu-react";

function ContactForm() {
  // TODO - update to the correct endpoint

  const { formState, getFormSubmitHandler } = useFormData(
    "ENDPOINT_URL_OR_HEROTOFU_FORM_ID"
  );

  const onSubmitCallback = ({ status, data }) => {
    // Sync the success/error status with 3rd party services easily. For example, analytics or CRM

    console.log(
      `The form finished submission in status: ${status} and data: ${JSON.stringify(
        data
      )}`
    );
  };

  const statusBg =
    formState.status === "not_initialized"
      ? ""
      : formState.status === "error"
      ? "bg-red-600 text-red-100"
      : formState.status === "loading"
      ? "bg-yellow-600 text-yellow-100"
      : "bg-green-600 text-green-100";

  return (
    <div className="md:w-96 md:max-w-full lg:w-full flex justify-center items-center ">
      <div className="rounded-md p-8 shadow-md bg-white flex justify-center items-center ">
        <form
          method="POST"
          action={
            "https://public.herotofu.com/v1/bfdd04e0-67b1-11ef-b56a-996140013c43"
          }
          accept-charset="UTF-8"
        >
          <label className="block mb-6">
            <span className="text-gray-700 mb-4 xxs:text-xs sm:text-sm  ">
              Name
            </span>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-1 focus:outline-none rounded xxs:text-xs sm:text-sm  "
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700 mb-4 xxs:text-xs sm:text-sm  ">
              Email
            </span>
            <input
              name="email"
              type="email"
              className=" w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-1 focus:outline-none rounded xxs:text-xs sm:text-sm  "
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700 mb-4 xxs:text-xs sm:text-sm ">
              Message
            </span>
            <textarea
              name="message"
              className=" w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-1 focus:outline-none rounded xxs:text-xs sm:text-sm  "
              rows={3}
            ></textarea>
          </label>
          <div className="mb-2 flex justify-center items-center">
            <button
              type="submit"
              className=" focus:shadow-outline hover:bg-orange-500 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-orange-600 rounded-lg xxs:text-xs sm:text-sm "
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
