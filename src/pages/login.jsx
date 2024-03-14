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
    <h2 class="text-2xl font-semibold text-center text-white mb-6">Login</h2>
    <form class="w-full max-w-md">
      <div class="mb-4">
        {/* <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label> */}
        <input
          class="appearance-none py-4 bg-transparent border-b border-teal-500 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          id="username"
          type="text"
          placeholder="Enter your username"
        />
      </div>
      <div class="mb-6">
        {/* <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label> */}
        <input
          class="appearance-none py-4 bg-transparent border-b border-teal-500 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="w-full mb-4 text-[18px] mt-6 p-2 rounded-full bg-white text-orange-600 hover:bg-orange-600 hover:text-white"
          type="button"
        >
          <Link to="/"
          >Sign In</Link>
          
        </button>
        
      </div>
      <a
          class=" ml-10  text-white hover:text-blue-800 "
          href="#"
        >
          Forgot Password?
        </a>
      <div class="mt-4 text-center">
        <span class="text-gray-300">Not Registered? 
        <Link className="text-yellow-400" to="/register">
                Register!
              </Link>
        </span>
        
      </div>
    </form>
  </div>
</div>
<Footer />
    </>
  );
}

export default Login;
