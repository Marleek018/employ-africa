import React from 'react'
import logo from '../../assets/logo.svg'
import hamb from '../../assets/hamb.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import { useState } from 'react';
import elogo from '../../assets/elogo.svg'
import home from '../../assets/home.svg'
import conta from "../../assets/conta.svg";
import abt from "../../assets/abt.svg";
import pri from "../../assets/pri.svg";




const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleSidebar = () => {
     setIsOpen(!isOpen);
   };
  return (
    <div className="flex justify-between my-[32px] xs:mx-[20px] xmd:mx-[50px]">
      <div>
        <Link to="/">
          <img
            className="xmd:w-[116px] xs:w-[66px] xs:my-[10px] xmd:my-0 "
            src={logo}
            alt="IMAGE"
          />
        </Link>
      </div>
      <div className="xs:hidden xmd:block">
        <ul className=" flex gap-[30px] text-black font-normal text-[16px]  font-DmSans cursor-pointer my-[10px]">
          <li className="active:font-bold  hover:underline hover:decoration-orange">
            <Link to="/"> Home</Link>
          </li>
          <li className="active:font-bold hover:underline hover:decoration-orange">
            <Link to="/pricing"> Pricing</Link>
          </li>
          <li className="active:font-bold hover:underline hover:decoration-orange">
            <Link to="/about">About Us</Link>
          </li>
          <a href="mailto:hello@employafrica.org">
            <li className="active:font-bold hover:underline hover:decoration-orange">
              Contact Us
            </li>
          </a>
        </ul>
      </div>

      <button className="bg-orange py-[15px] px-[18px] border rounded-[6px] text-white text-[16px] font-medium font-DmSans xs:hidden xmd:block hover:bg-neworange">
        Create Account
      </button>

      <div className="xs:block xmd:hidden font-DmSans z-10">
        <GiHamburgerMenu
          onClick={toggleSidebar}
          className="text-[30px] my-[10px]"
        />
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 hidden"
          }`}
          onClick={toggleSidebar}
        ></div>
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-newwhite text-black transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className=" font-bold text-[16px] flex gap-[12px] items-center mb-[44px] px-[24px] pt-[24px]">
            <Link to="/">
              <img className="cursor-pointer" src={elogo} alt="IMAGE" />
            </Link>
            <h3 className="">Employ Africa</h3>
          </div>
          <ul className="px-[24px]">
            <div className="flex items-center gap-[16px] py-[16px] mb-[24px]">
              <img src={home} alt="IMAGE" />
              <li className="font-medium text-[16px] hover:font-semibold  cursor-pointer">
                <Link to="/"> Home</Link>
              </li>
            </div>
            <div className="flex items-center gap-[16px] py-[16px] mb-[24px]">
              <img src={pri} alt="IMAGE" />
              <li className="font-medium  text-[16px] hover:font-semibold cursor-pointer ">
                <Link to="/pricing"> Pricing</Link>
              </li>
            </div>
            <div className="flex items-center gap-[16px] py-[16px] mb-[24px]">
              <img src={abt} alt="IMAGE" />
              <li className="font-medium  text-[16px] hover:font-semibold cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
            </div>
            <div className="flex items-center gap-[16px] py-[16px] ">
              <img src={conta} alt="IMAGE" />
              <a href="mailto:hello@employafrica.org">
                <li className="font-medium  text-[16px] hover:font-semibold cursor-pointer ">
                  Contact Us
                </li>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar