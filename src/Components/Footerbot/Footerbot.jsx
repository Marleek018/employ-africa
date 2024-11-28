import React from 'react'
import logo from '../../assets/logof.svg'
import apple from '../../assets/apple.png'
import playstore from '../../assets/playst.svg'
import { useRef } from 'react'


const Footerbot = () => {
  // const targetRef = useRef(null);

  // const scrollToSection = () => {
  //   targetRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <section className="bg-dblack xs:block xmd:flex justify-between xs:pl-[20px] xsm:pl-[50px] xmd:pl-[70px] lg:pl-[80px] xl:pl-[120px] xs:pr-[50px] xmd:pr-[90px] lg:pr-[120px] xl:pr-[260px] xs:pt-[60px] xmd:pt-[70px] lg:pt-[80px] xl:pt-[90px] xs:pb-[70px] xmd:pb-[80px] lg:pb-[90px] xl:pb-[110px] font-DmSans">
      <div>
        <img src={logo} alt="IMAGE" />
        <p className="xs:w-[334px] xmd:w-[260px] xl:w-[273px] font-normal xs:text-[16px] xmd:text-[14px] text-bwhite pt-[16px] xs:pb-[30px] xmd:pb-[40px] lg:pb-[46px] xl:pb-[56px] xs:leading-[23px] xmd:leading-[20px]">
          We help businesses access verified African talent and global
          opportunities in the fastest, affordable and most convenient way.
        </p>
        <div className="flex cursor-pointer">
          <a href="http://bit.ly/theemployapp" target="_blank">
            <img src={playstore} alt="LOGO" />
          </a>
        </div>
        <h1 className="font-DmSans font-normal text-[12px] text-dgray pt-[70px] xs:hidden xmd:block">
          © 2024 Employ. All rights reserved.
        </h1>
      </div>
      <div className="xs:grid xs:grid-cols-2 xmd:flex xs:gap-[34px] xmd:gap-[40px] lg:gap-[50px] xl:gap-[70px] xs:pt-[94px] xmd:pt-[20px] lg:pt-[25px] xl:pt-[0px]">
        <div>
          <h3 className="font-DmSans font-medium text-[16px] text-white leading-[23px] pb-[20px]">
            Pricing Plans
          </h3>
          <ul className="xs:w-[172px]">
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Job Seekers
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              For Hiring Managers
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              For Recruiters
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px]">
              African Talents
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-DmSans font-medium text-[16px] text-white leading-[23px] pb-[20px]">
            About Employ
          </h3>
          <ul>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Our Values
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Our Identity
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Our Mission
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px]">
              Our Vision
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-DmSans font-medium text-[16px] text-white leading-[23px] pb-[20px]">
            Contact Us
          </h3>
          <ul>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Help centre
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              FAQ
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px] pb-[14px]">
              Contact
            </li>
            <li className="font-DmSans font-medium text-[16px] text-dgray leading-[23px]">
              Press
            </li>
          </ul>
        </div>
      </div>
      <h1 className="font-DmSans font-normal text-[12px] text-dgray xs:pt-[100px] xs:block xmd:hidden">
        © 2024 Employ. All rights reserved.
      </h1>
    </section>
  );
}

export default Footerbot