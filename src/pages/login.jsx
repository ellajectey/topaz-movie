import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <>
     <NavBar />
<div class="flex justify-center items-center h-screen bg-[url('./assets/images/yellow-movie-bg.jpg')]">
  <div class=" bg-slate-800 border border-slate-400 rounded-md p-12 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
    <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>
    <form class="w-full max-w-md">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div class="mt-4 text-center">
        <span class="text-gray-600">Not Registered? </span>
        <a class="text-blue-300" href="/signup">
          Sign Up
        </a>
      </div>
    </form>
  </div>
</div>
<Footer />
    </>
  );
}

export default Login;
