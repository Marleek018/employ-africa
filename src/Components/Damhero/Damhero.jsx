import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import damimg1 from '../../assets/damimg1.png'
import damimg2 from "../../assets/damimg2.png";
import under from '../../assets/underimg.png'
import { Link } from 'react-router-dom';




const Damhero = () => {
  return (
    <section className="font-DmSans bg-fgray xmd:py-[70px] lg:py-[85px] xl:py-[100px]">
      <h3 className="font-bold xmd:text-[36px] lg:text-[40px] xl:text-[50px] xmd:leading-[36px] lg:leading-[40px] xl:leading-[50px] text-center xmd:pb-[60px] lg:pb-[70px] xl:pb-[90px]">
        Our Pricing plans are <span className="text-orange">flexible</span>{" "}
        <br /> and <span className="text-orange">affordable</span>
      </h3>
      <div className="flex justify-evenly ">
        <div className="">
          <img
            className="rounded-[20px] xmd:mb-[16px] lg:mb-[20px] xl:mb-[24px] xmd:mt-[20px] lg:mt-[24px] xl:mt-[30px] xmd:w-[65%] lg:w-[75%] xl:w-[356px]"
            src={damimg1}
            alt="IMAGE"
          />
          <img
            className="rounded-[20px] ml-[57px] xmd:w-[65%] lg:w-[75%] xl:w-[356px]"
            src={damimg2}
            alt="IMAGE"
          />
          <div className="flex justify-end text-orange items-center xmd:pt-[40px] lg:pt-[50px]  xl:pt-[70px]">
            <span className="font-semibold text-[20px] pb-[2px] border-b-[1px] border-orange cursor-pointer">
              <Link to="/about"> Learn more about pricing</Link>
            </span>
            <IoIosArrowRoundForward />
          </div>
        </div>
        <div className="bg-orange text-offwhite xmd:w-[354px] lg:w-[424px] xl:w-[574px] xmd:pl-[22px] lg:pl-[32px] xl:pl-[48px] xmd:pr-[14px] lg:pr-[17px] xl:pr-[21px] xmd:py-[16px] lg:py-[20px] xl:py-[24px] h-[100%] border-[1px] border-black rounded-[5px] relative shadow-customblack">
          <img
            className="absolute top-[-9%] left-[-0.8%]"
            src={under}
            alt="IMAGE"
          />
          <h3 className=" font-bold xmd:text-[28px] lg:text-[32px] xl:text-[40px] text-center ">
            For Recruiters
          </h3>
          <div>
            <h3 className=" font-bold xmd:text-[24px] lg:text-[28px] xl:text-[35px] xmd:pt-[16px] lg:pt-[18px] xl:pt-[24px]">
              Free{" "}
            </h3>
            <ul className=" xmd:text-[16px] lg:text-[18px] xl:text-[22px] font-medium">
              <li> • Post 2 jobs in a month </li>
              <li>• Access pre-verified and quality talent </li>
              <li>• Manual candidate shortlisting </li>
            </ul>
          </div>
          <div>
            <h3 className="font-DmSans font-bold text-[35px] pt-[44px]">
              Premium
            </h3>
            <p className="xmd:text-[14px] lg:text-[16px] xl:text-[22px] font-medium pb-[14px]">
              Recruiters pay between{" "}
              <span className="font-black">₦5,000 monthly</span> or <br />{" "}
              <span className="font-black">₦50,000 annually</span> to access our
              paid plans.
            </p>
            <ul className="xmd:text-[16px] lg:text-[18px] xl:text-[22px] font-medium">
              <li>• Post 3 – 5 jobs</li>
              <li>• Add 2 extra users</li>
              <li>• Access HR documents</li>
              <li>• Automated candidate shortlisting</li>
              <li>• Access HR advisory</li>
              <li>• Access funded programs</li>
              <li>• Access networking events</li>
              <li>• Access niche-based masterclasses</li>
              <li>• Get automated interview reports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Damhero