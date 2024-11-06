import React from 'react'
import testimg1 from '../../assets/testimg1.png'
import testimg2 from "../../assets/testimg2.png";
import testimg3 from "../../assets/testimg3.png";
import { Carousel } from "antd";


 const contentStyle = {
   margin: 120,
   height: "160px",
   color: "#fff",
   lineHeight: "160px",
   textAlign: "center",
   background: "#364d79",
 };


const Testimonial = () => {
    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };
 
  return (
    <div className="font-DmSans xs:py-[65px] xsm:py-[90px] xmd:py-[100px] lg:py-[118px] xl:py-[148px]">
      <h3 className="text-center font-black xs:text-[35px] xsm:text-[40px] xmd:text-[60px] text-gradient">
        TESTIMONIALS
      </h3>
      <p className="text-center font-normal xs:text-[14px] xsm:text-[16px] xmd:text-[22px] text-fblack leading-[30px] pb-[70px]">
        What our clients are saying about us
      </p>
      <div className="xsm:flex justify-center">
        <div className="xs:block xl:hidden w-[360px] pl-[33px]">
          <Carousel afterChange={onChange}>
            <div className="border-[1px] border-black rounded-[6px] pt-[40px] pb-[25px] pl-[26px] pr-[38px]">
              <p className="font-normal text-[16px] leading-[20px] pb-[48px] w-[313px]">
                “I love the candidate you got for me, I am glad it is coming
                from you.”
              </p>
              <div className="flex gap-[4px] items-center ">
                <img
                  className="rounded-[50%] h-[35px]  "
                  src={testimg1}
                  alt="IMAGE"
                />
                <div>
                  <h4 className="font-bold text-[20px]">Tunji Ola</h4>
                  <p className="font-medium text-[12px]">
                    Former CEO - Chips, bits and Bytes Ltd
                  </p>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-black rounded-[6px] pt-[37px] pb-[23px] pl-[14px] pr-[23px]">
              <p className="font-normal text-[16px] leading-[20px] pb-[27px] w-[313px]">
                “The candidate is performing excellently on the job, thank you
                for everything. Employ Africa is excellent at this recruitment
                game.”
              </p>
              <div className="flex gap-[4px] items-center ">
                <img
                  className="rounded-[50%] h-[35px]  "
                  src={testimg2}
                  alt="IMAGE"
                />
                <div>
                  <h4 className="font-bold text-[20px]">Joshua Ogunde</h4>
                  <p className="font-medium text-[10px] w-[235px]">
                    Head, GM & Procurement - SLOT Systems Ltd
                  </p>
                </div>
              </div>
            </div>
            <div className="xsm:flex xsm:justify-center ">
              <div className="border-[1px] border-black rounded-[6px] pt-[37px] pb-[23px] pl-[14px] pr-[23px]">
                <p className="font-normal text-[16px] leading-[20px] pb-[27px] w-[313px]">
                  “Thank you for the recruitment, we would love to have a
                  long-lasting partnership with you.”
                </p>
                <div className="flex gap-[4px] items-center ">
                  <img
                    className="rounded-[50%] h-[35px]  "
                    src={testimg3}
                    alt="IMAGE"
                  />
                  <div>
                    <h4 className="font-bold text-[20px]">Emeka Emehelu</h4>
                    <p className="font-medium text-[12px]">
                      CEO - Express Agro-Allied Limited
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="xs:hidden xl:block">
        <div className="flex justify-evenly text-fblack">
          <div className="border-[1px] border-black rounded-[6px] pt-[37px] pb-[23px] pl-[24px] pr-[23px]">
            <p className="font-normal text-[16px] leading-[20px] pb-[48px]">
              “I love the candidate you got for me, I am <br /> glad it is
              coming from you.”
            </p>
            <div className="flex gap-[4px] items-center ">
              <img
                className="rounded-[50%] h-[35px]  "
                src={testimg1}
                alt="IMAGE"
              />
              <div>
                <h4 className="font-bold text-[20px]">Tunji Ola</h4>
                <p className="font-medium text-[12px]">
                  Former CEO - Chips, bits and Bytes Ltd
                </p>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-black rounded-[6px] pt-[37px] pb-[23px] pl-[24px] pr-[23px]">
            <p className="font-normal text-[16px] leading-[20px] pb-[27px]">
              “The candidate is performing excellently on <br /> the job, thank
              you for everything. Employ <br /> Africa is excellent at this
              recruitment game.”
            </p>
            <div className="flex gap-[4px] items-center ">
              <img
                className="rounded-[50%] h-[35px]  "
                src={testimg2}
                alt="IMAGE"
              />
              <div>
                <h4 className="font-bold text-[20px]">Joshua Ogunde</h4>
                <p className="font-medium text-[12px]">
                  Head, GM & Procurement - SLOT Systems Ltd
                </p>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-black rounded-[6px] pt-[37px] pb-[23px] pl-[24px] pr-[23px]">
            <p className="font-normal text-[16px] leading-[20px] pb-[27px]">
              “Thank you for the recruitment, we would <br /> love to have a
              long-lasting partnership with <br /> you.”
            </p>
            <div className="flex gap-[4px] items-center ">
              <img
                className="rounded-[50%] h-[35px]  "
                src={testimg3}
                alt="IMAGE"
              />
              <div>
                <h4 className="font-bold text-[20px]">Emeka Emehelu</h4>
                <p className="font-medium text-[12px]">
                  CEO - Express Agro-Allied Limited
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial