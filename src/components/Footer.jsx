import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">e-Shop</h3>
          <p className="mt-4 md:text-m ">
            Your one-step for all your needs. Shop with us and experience the
            best online shopping experiences.
            We ensuring seamless experiences and trust-building for a great shopping experience with us."
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact"  className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div >
          <h4  className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-4">
            <Link href="" className="hover:text-gray-400"><FaFacebook /> </Link>
            <Link href="" className="hover:text-gray-400"><FaTwitter /> </Link>
            <Link href="" className="hover:text-gray-400"><FaGithub /></Link>
            <Link href="" className="hover:text-gray-400"><FaLinkedin /> </Link>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input type="email" placeholder="Enter your Email"
              className=" w-full md:w-[250px] p-2 rounded-l-lg bg-gray-800 border  border-gray-600"
            />
            <button className="bg-red-600  text-white px-4 py-2 rounded-r-lg-xl border border-gray-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="bg-white mt-10" />
      <div className="mt-8 border-t border-gray-800 pt-4 ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2024 All rights reserved </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
              <Link className="hover:underline" >Privacy policy</Link>
              <Link className="hover:underline" >Terms & Conditions</Link>
             </div>
           </div>
          </div>
          <hr className="bg-white mt-8" />
    </footer>
  );
};

export default Footer;
