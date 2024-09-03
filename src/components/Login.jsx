"use client";

import Link from "next/link";
import React, { useState, FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex  flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="xxs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl font-bold mb-6 text-center">
          Login
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2 xxs:text-xs sm:text-sm md:text-md"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-none focus:outline-1 rounded xxs:text-xs sm:text-sm md:text-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 mb-2 xxs:text-xs sm:text-sm md:text-md"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 focus:outline-customOrange focus:outline-1 focus:outline-none rounded xxs:text-xs sm:text-sm md:text-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-500 text-white p-2 rounded xxs:text-xs sm:text-sm md:text-md"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center xxs:text-xs sm:text-sm md:text-md">
        Don't have an account?{" "}
        <Link href="/signup" className="text-orange-500">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
