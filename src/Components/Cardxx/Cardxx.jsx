import React from 'react'
import myimg1 from "../../assets/myimg1.png";
import myimg2 from "../../assets/myimg2.png";
import talent from "../../assets/talent.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import pos2 from "../../assets/pos2.png";

const Cardxx = () => {
  return (
    <section className="font-DmSans relative bg-white">
      <div className="pb-[80px] pt-[60px] ">
        <div className="relative">
          <div className="bg-black text-newwhite pl-[30px] pr-[21px] py-[14px] xs:w-[319px] xsm:w-[410px] h-[100%] border-[1px] border-offwhite rounded-[5px] shadow-customorange w-[90%] mx-auto">
            <img
              className="absolute w-[200px] top-[-10%] left-[24%]"
              src={talent}
              alt="IMAGE"
            />

            <h3 className=" font-bold xs:text-[24px] xsm:text-[28px] text-center ">
              For Talents
            </h3>
            <div>
              <h3 className=" font-bold xs:text-[22px] xsm:text-[26px] pt-[27px]">
                Free{" "}
              </h3>
              <ul className="xs:text-[13px] xsm:text-[16px] font-medium">
                <li> • Search and access job opportuni1es </li>
                <li> • Get Recruiter Feedback </li>
                <li> • Get relevant job updates </li>
                <li> • Get application review applications </li>
                <li>
                  {" "}
                  • Get notifications on niche-based job <br /> openings on your
                  mail.
                </li>
              </ul>
            </div>
            <div>
              <h3 className=" font-bold xs:text-[22px] xsm:text-[26px] pt-[28px]">
                Premium
              </h3>
              <p className=" xs:text-[12px] xsm:text-[16px] font-medium pb-[10px]">
                Talent pay between{" "}
                <span className="font-black">₦1,500 monthly</span> or <br />{" "}
                <span className="font-black">₦15,000 annually</span> to access
                our paid plans.
              </p>
              <ul className="xs:text-[12px] xsm:text-[16px] font-medium">
                <li>• Professional CV with custom templates</li>
                <li>• Access scholarship opportunities</li>
                <li>• Access career events</li>
                <li>• Access mentors</li>
                <li>
                  • Access training based on automated <br /> career path
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center pt-[36px] text-orange">
            <span className="font-semibold text-[18px] pb-[2px] border-b-[1px] border-orange cursor-pointer">
              <Link>Learn more about pricing</Link>
            </span>
            <IoIosArrowRoundForward />
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-center">
            <img
              className="rounded-[20px] mb-[16px] mt-[40px] w-[60%] md:w-[55%]"
              src={myimg1}
              alt="IMAGE"
            />
          </div>
           <img
              className="absolute w-[60%] right-[-12%] top-[35%] xsm:top-[32%] md:top-[30%] z-10"
              src={pos2}
              alt="IMAGE"
            />
          <div className="flex justify-center">
            <img
              className="rounded-[20px] relative left-[10%] w-[60%] md:w-[55%]"
              src={myimg2}
              alt="IMAGE"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cardxx