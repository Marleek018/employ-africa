import React from 'react'
import priceimg1 from '../../assets/priceimg1.png'
import priceimg2 from "../../assets/priceimg2.png";
import priceimg3 from "../../assets/priceimg3.png";
import priceimg4 from "../../assets/priceimg4.png";
import Download from '../../Components/Download/Download';
import Faq from '../../Components/Faq/Faq';


const Pricing = () => {
  return (
    <div className="font-DmSans">
      <div className="xs:pt-[60px] xsm:pt-[80px] lg:pt-[92px] xl:pt-[102px] xs:pb-[102px] xsm:pb-[114px] lg:pb-[122px] xl:pb-[135px] bg-lightorange xs:px-[10px] xmd:px-0">
        <div className="flex justify-center">
          <h3 className="font-bold xs:text-[28px] xsm:text-[32px] xmd:text-[36px] lg:text-[40px] xl:text-[50px] xs:w-[380px] xsm:w-[400px] xmd:w-[440px] lg:w-[550px] xl:w-[780px] text-center xs:leading-[41px] xsm:leading-[46px] xmd:leading-[50px] xs:pb-[24px] xmd:pb-[34px] xl:pb-[44px]">
            Our Pricing plans are <span className="text-orange">flexible</span>{" "}
            and <span className="text-orange">super cheap</span>
          </h3>
        </div>
        <div className="flex justify-center">
          <p className="font-normal xs:text-[16px] xmd:text-[18px] xs:w-[370px] xmd:w-[580px] xs:leading-[20px] xmd:leading-[26px] text-center">
            We help businesses access verified African talent and global
            opportunities in the <span className="font-extrabold">fastest</span>
            , <span className="font-extrabold">affordable</span> and{" "}
            <span className="font-extrabold">most convenient way.</span>
          </p>
        </div>
      </div>
      <main className="">
        <div className="bg-adu xs:block xmd:flex xmd:justify-evenly xs:py-[80px] xsm:py-[80px] xmd:py-[90px]">
          <div className="xs:px-[36px] xmd:px-[0px]">
            <div className="">
              <h3 className="font-semibold text-newwhite xs:text-[30px] xs:leading-[33px] xmd:leading-[40px] xsm:text-[36px] xmd:w-[440px] lg:w-[520px] xl:w-[650px] xs:pb-[24px] xsm:pb-[] xmd:pb-[28px] ">
                Premium Pricing for{" "}
                <span className="text-orange">Recruiters</span>{" "}
              </h3>
            </div>
            <div className="">
              <p className="text-newwhite font-normal xs:text-[13px] xsm:text-[] xmd:text-[20px] xs:w-[328px] xsm:w-[450px] xmd:w-[480px] lg:w-[510px] xl:w-[590px] xs:leading-[20px] xmd:leading-[26px] xs:pb-[] xsm:pb-[] xmd:pb-[60px] lg:pb-[70px] xl:pb-[80px]">
                We help businesses access verified African talent and global
                opportunities in the{" "}
                <span className="font-medium">Recruiters</span>,{" "}
                <span className="font-medium">affordable</span> and{" "}
                <span className="font-medium">most convenient way.</span>
              </p>
            </div>
            <div className="">
              <div className="xmd:flex xmd:gap-[22px] xl:gap-[31px] ">
                <img
                  className="xs:pb-[20px] xmd:pb-0 xs:pt-[62px] xmd:pt-0"
                  src={priceimg1}
                  alt="IMAGE"
                />
                <img className="" src={priceimg2} alt="IMAGE" />
              </div>
            </div>
          </div>
          <div className="xs:flex xs:justify-center xsm:justify-start xsm:pl-[6%] xmd:pl-0 xs:pt-[110px] xmd:pt-[0px]">
            <div className="border-[1px] border-newwhite bg-black xs:w-[70%] xsm:w-[48%] xmd:w-[277px] lg:w-[297px] xl:w-[377px] xs:h-fit xmd:h-fit rounded-[4px] xs:pt-[29px] xmd:pt-[35px] shadow-customwhite">
              <h3 className="font-bold xs:text-[28px] xsm:text-[30px] xmd:text-[34px] xl:text-[40px] text-newwhite text-center xs:pb-[58px] xmd:pb-[61px]">
                Premium Plan
              </h3>
              <h2 className="font-bold text-newwhite xs:text-[16px] xmd:text-[18px] lg:text-[20px] xl:text-[22px] text-center">
                ₦5,000 / <span className="font-medium">Monthly</span>
              </h2>
              <h2 className="font-medium text-[22px] text-newwhite text-center pt-[13px] pb-[13px]">
                OR
              </h2>
              <h2 className="font-bold text-newwhite xs:text-[16px] xmd:text-[22px] text-center xs:pb-[58px] xmd:pb-[62px]">
                ₦50,000 / <span className="font-medium">Yearly</span>
              </h2>
              <div className="flex justify-center">
                <button className="xs:w-[218px] xmd:w-[230px] xs:h-[52px] xmd:h-[36px] bg-orange text-newwhite text-[16px] font-semibold rounded-[6px] xs:mb-[21px] xmd:mb-[43px]">
                  Buy Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="">
        <div className="bg-offgray xs:block xmd:flex xmd:justify-evenly xs:py-[80px] xsm:py-[80px] xmd:py-[90px]">
          <div className="xs:px-[36px] xmd:px-[0px]">
            <h3 className="font-semibold text-newwhite xs:text-[30px] xsm:text-[36px]  xmd:text-[40px] xs:w-[] xsm:w-[] xmd:w-[440px] lg:w-[520px] xl:w-[650px] xs:pb-[] xsm:pb-[] xmd:pb-[28px] ">
              Premium pricing for <span className="text-neworange">Talent</span>{" "}
            </h3>
            <p className="text-newwhite font-normal xs:text-[13px] xsm:text-[] xmd:text-[20px] xs:w-[328px] xsm:w-[450px]  xmd:w-[480px] lg:w-[510px] xl:w-[590px] xs:leading-[20px] xmd:leading-[26px] xs:pb-[] xsm:pb-[] xmd:pb-[80px]">
              We help businesses access verified African talent and global
              opportunities in the{" "}
              <span className="font-medium">Recruiters</span>,{" "}
              <span className="font-medium">affordable</span> and{" "}
              <span className="font-medium">most convenient way.</span>
            </p>
            <div className="xmd:flex gap-[31px] ">
              <img
                className="xs:pb-[20px] xmd:pb-0 xs:pt-[62px] xmd:pt-0"
                src={priceimg3}
                alt="IMAGE"
              />
              <img className="" src={priceimg4} alt="IMAGE" />
            </div>
          </div>
          <div className="xs:flex xs:justify-center xsm:justify-start xsm:pl-[6%] xmd:pl-0 xs:pt-[110px] xmd:pt-[0px]">
            <div className="border-[1px] border-newwhite bg-newwhite xs:w-[70%] xsm:w-[48%] xmd:w-[277px] lg:w-[297px] xl:w-[377px] xs:h-fit xmd:h-fit rounded-[4px] xs:pt-[29px] xmd:pt-[35px] shadow-customorange">
              <h3 className="font-bold xs:text-[28px] xsm:text-[30px] xmd:text-[40px] text-black text-center xs:pb-[58px] xmd:pb-[61px]">
                Premium Plan
              </h3>
              <h2 className="font-bold text-black xs:text-[16px] xmd:text-[22px] text-center">
                ₦1,500 / <span className="font-medium">Monthly</span>
              </h2>
              <h2 className="font-medium text-[22px] text-black text-center pt-[13px] pb-[13px]">
                OR
              </h2>
              <h2 className="font-bold text-black xs:text-[16px] xmd:text-[22px] text-center xs:pb-[58px] xmd:pb-[62px]">
                ₦15,000 / <span className="font-medium">Yearly</span>
              </h2>
              <div className="flex justify-center">
                <button className="xs:w-[218px] xmd:w-[230px] xs:h-[52px] xmd:h-[36px] bg-black text-newwhite text-[16px] font-semibold rounded-[6px] xs:mb-[21px] xmd:mb-[43px]">
                  Buy Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Download />
      <Faq />
    </div>
  );
}

export default Pricing