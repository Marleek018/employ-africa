import React from 'react'
import arrow from "../../assets/arrow.png";
import vec1 from '../../assets/vec1.png'
import vec2 from "../../assets/vec2.png";
import vec3 from "../../assets/vec3.png";
import mobilevec from '../../assets/mobvec.png'

const Subhero = () => {
  return (
    <div>
      <div className="  xs:block xmd:flex xmd:gap-[40px] lg:gap-[60px] xl:gap-0 justify-between xs:px-[12px] xsm:px-[34px] xmd:px-[88px] xs:py-[55px] xmd:py-[90px] lg:py-[120px] xl:py-[168px] bg-fgray font-DmSans">
        <div>
          <div className="xs:flex xs:justify-center xmd:justify-start">
            <h6 className="bg-lightorange border-[1px] xs:w-[214px] xmd:w-[229px] xs:h-[35px] xmd:h-[41px] xs:pt-[6px] text-center rounded-[10px] text-orange text-[16px]  font-light xs:mb-[60px]  xmd:mb-[44px]">
              Why should you trust us ?
            </h6>
          </div>

          <h3 className=" font-semibold xs:text-center xmd:text-left xs:text-[28px] xsm:text-[34px] xmd:text-[40px] lg:text-[30px] xl:text-[60px] xs:leading-[39px] xsm:leading-[46px] xmd:leading-[54px] lg:leading-[42px] xl:leading-[78px] xs:pb-[72px] xmd:pb-[52px]">
            Employ Africa <span className="text-egray">is the</span> <br /> Best{" "}
            <span className="text-egray">on the</span> Continent!
          </h3>
          <h6 className=" xs:text-center xmd:text-left font-normal xs:text-[16px] xsm:text-[18px]  xmd:text-[20px]">
            Here’s why we said this
          </h6>
          <div className="xs:hidden xmd:block">
            <div className=" flex justify-end">
              <img src={arrow} alt="IMAGE" />
            </div>
          </div>

          <div className="relative xs:block xmd:hidden">
            <img
              className="absolute xs:right-[0%] xsm:right-[0%] xs:top-[-50px] w-[20%]"
              src={mobilevec}
              alt="IMAGE"
            />
          </div>
        </div>
        <div className="sm:flex justify-center">
          <div className="xs:mt-[78px] xmd:mt-0 ">
            <div className="xs:w-[350px] xsm:w-[410px]  xmd:w-[444px] xs:h-[140px] xsm:h-[160px] xmd:h-fit flex gap-[11px] bg-newwhite border-[0.5px] border-jgray rounded-[12px] xs:p-[16px]  xmd:p-[20px] mb-[19px]">
              <img
                className="xs:w-[17px] xsm:w-[24px] xmd:w-[38px] xs:h-[17px] xsm:h-[24px] xmd:h-[38px]"
                src={vec1}
                alt="IMAGE"
              />
              <div>
                <h3 className=" font-semibold xs:text-[17px] xmd:text-[20px] ">
                  Faster time to Hire!
                </h3>
                <p className=" font-light xs:text-[12px] xsm:text-[14px] xmd:text-[14px] text-dgray xs:leading-[17px] xsm:leading-[18px] xmd:leading-[22px] xs:pt-[8px] xmd:pt-[10px]">
                  We help UBAgroup, SLOT Systems Limited, Express Agro Limited,
                  Spectrum Phones Limited recruit the suitable candidates within
                  <span className="font-medium text-black">seven days</span>. We
                  can repeat the same thing for your company.{" "}
                </p>
              </div>
            </div>
            <div className="xs:w-[350px] xsm:w-[410px]  xmd:w-[444px] xs:h-[140px] xsm:h-[160px] xmd:h-fit flex gap-[11px] bg-newwhite border-[0.5px] border-jgray rounded-[12px] xs:p-[16px] xmd:p-[20px] mb-[19px]">
              <img
                className="xs:w-[17px] xsm:w-[24px] xmd:w-[38px] xs:h-[17px] xsm:h-[24px] xmd:h-[38px]"
                src={vec2}
                alt="IMAGE"
              />
              <div>
                <h3 className=" font-semibold xs:text-[17px] xmd:text-[20px]">
                  Affordability
                </h3>
                <p className="font-light xs:text-[12px] xsm:text-[14px] xmd:text-[14px] text-dgray xs:leading-[17px] xsm:leading-[18px] xmd:leading-[22px] xs:pt-[8px] xmd:pt-[10px]">
                  Our recruitment solution is relatively affordable than our
                  competitors as we allow our recruiters post jobs for free.
                </p>
              </div>
            </div>
            <div className="xs:w-[350px] xsm:w-[410px]  xmd:w-[444px] xs:h-[140px] xsm:h-[160px] xmd:h-fit flex gap-[11px] bg-newwhite border-[0.5px] border-jgray rounded-[12px] xs:p-[16px] xmd:p-[20px] mb-[19px]">
              <img
                className="xs:w-[17px] xsm:w-[24px] xmd:w-[38px] xs:h-[17px] xsm:h-[24px] xmd:h-[38px]"
                src={vec3}
                alt="IMAGE"
              />
              <div>
                <h3 className=" font-semibold xs:text-[17px] xmd:text-[20px]">
                  Pre-vetted Talents
                </h3>
                <p className="font-light xs:text-[11px] xs:w-[277px]  xsm:text-[14px] xmd:text-[13.5px] xmd:w-[339px] text-dgray xs:leading-[17px] xsm:leading-[18px] xmd:leading-[22px] xs:pt-[8px] xmd:pt-[10px] ">
                  Our talents are pre-vetted by a reputable third-party
                  verification company. Some of them are alumni from the best
                  talent accelerators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subhero