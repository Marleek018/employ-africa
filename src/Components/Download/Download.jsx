import React from 'react'
import gplay from "../../assets/gplay.svg";
import iphone from "../../assets/iphone.png";

const Download = () => {
  return (
    <section>
      <div className="xs:block xmd:flex xmd:justify-around font-DmSans py-[62px] bg-bgimg  bg-mycolor">
        <div className=" xs:py-[68px] xsm:py-[90px] xmd:py-[120px]">
          <div className="flex justify-center items-center">
            <h3 className="xs:w-[353px] xsm:w-[412px] xmd:w-[470px] lg:w-[510px] xl:w-[618px] font-bold xs:text-[30px] xsm:text-[36px] xmd:text-[40px] xl:text-[50px] xs:leading-[39px] xsm:leading-[45px] xmd:leading-[56px] xl:leading-[66px] pb-[34px] xs:text-center xmd:text-left">
              Download our Mobile App to enjoy all these benefits
            </h3>
          </div>
          <p className="xs:text-center xmd:text-left  font-normal xs:text-[16px] xmd:text-[18px] xl:text-[20px] xs:leading-[20px] xmd:leading-[24px] xl:leading-[26px] xs:pb-[59px] xsm:pb-[65px] xmd:pb-[70px] xl:pb-[80px] ">
            You can get our mobile app from PlayStore <br /> Click on the button
            below to get it now
          </p>
          <div className="flex  xs:justify-center xmd:justify-start">
            <a href="http://bit.ly/DownloadEmployNow" target="_blank">
              <img
                className="cursor-pointer xs:w-[204px] xsm:w-[230px] xmd:w-[260px] lg:w-[297px] xl:w-[329px]"
                src={gplay}
                alt="IMAGE"
              />
            </a>
          </div>
        </div>
        <div className="bg-newwhite border-[1px] border-bwhite rounded-[4px] xs:h-[302px] xsm:h-[332px] xmd:h-[380px] lg:h-[415px] xl:h-[480px] shadow-customorange xs:mt-[68px] xsm:mt-[74px] lg:mt-[80px] xl:mt-[90px] xs:w-[269px] xsm:w-[299px] xmd:w-[324px] lg:w-[364px] xl:w-[428px] xs:mx-auto xmd:mx-0 ">
          <div className="relative right-[10%] bottom-[17%] xs:w-[299px] xsm:w-[329px] xmd:w-[375px] lg:w-[410px] xl:w-[475px]">
            <img className="" src={iphone} alt="IMAGE" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download