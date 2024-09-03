"use client";
import Link from "next/link";
import React, { useState, FormEvent } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="xxs:text-xs sm:text-sm md:text-md lg:text-lg font-bold mb-6 text-center">
          Signup
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2 xxs:text-xs sm:text-sm "
            htmlFor="Name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2 xxs:text-xs sm:text-sm "
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2 xxs:text-xs sm:text-sm"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 mb-2 xxs:text-xs sm:text-sm"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-500 text-white p-2 rounded xxs:text-xs sm:text-sm"
        >
          Signup
        </button>
      </form>

      <p className="mt-4 text-center xxs:text-xs sm:text-sm ">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
