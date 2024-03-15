import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <>
      <NavBar />

      <div className="text-white h-[100vh] flex justify-center items-center content-center bg-cover bg-[url('./assets/images/yellow-movie-bg.jpg')]">
        <div className=" justify-center content-center bg-slate-800 border border-slate-400 rounded-md p-12 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-50 relative">
          <h1 className="text-xl  py-4 text-center" >Register Page</h1>

          <div>
          <input
              type="Full name"
              className=" appearance-none py-4 bg-transparent border-b border-teal-500 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Full name"
              aria-label="Full name"
            />
             <input
              type="email"
              className=" appearance-none py-4 bg-transparent border-b border-teal-500 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Your Email"
              aria-label="Email"
            />
          </div>
          <div>
            
            <input
              type="password"
              className="appearance-none py-4 bg-transparent border-b border-teal-500 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Your Password"
              aria-label="Password"
            />
            <input
              type="password"
              className="appearance-none py-4 bg-transparent border-b border-teal-500 w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
          </div>
          <div className="flex justify-between text-center">
            <div className="flex gap-2 ">
              <input type="checkbox" name="" id="" />
              <label className="py-6" htmlFor="Remember Me">
                {" "}
                Remember Me{" "}
              </label>
            </div>
            <span className="px-4 py-6 text-yellow-400"> Forgot Password?</span>
          </div>
          
          <Link className="text-yellow-400" to="/login"><button
            className="w-full mb-4 text-[18px] mt-6 p-2 rounded-full bg-white text-orange-600 hover:bg-orange-600 hover:text-white"
            type="submit">
            Register
          </button> </Link>

          <div className="m-4 text-center">
            <span >
              Already Have an Account?{" "}
              <Link className="text-yellow-400" to="/login">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
