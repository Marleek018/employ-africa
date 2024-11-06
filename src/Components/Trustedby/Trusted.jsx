import React from 'react'
import { Carousel } from "antd";
import slot from "../../assets/slot.png";
import rev from "../../assets/revo.png";
import uba from "../../assets/uba.png";
import lbs from "../../assets/lbs.png";
import fate from "../../assets/fate.png";
import found from "../../assets/found.png";
import star from "../../assets/star.png";
import spectrum from "../../assets/spectrum.png";



const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
};

const Trusted = () => {
  return (
    <div className='bg-offwhite py-[12px]'>
      <Carousel autoplay>
        <div>
        
          <div className="flex justify-around items-center">
            <img className="w-[76px] h-[20px]" src={slot} alt="IMAGE" />
            <img className="w-[84px] h-[57px]" src={rev} alt="IMAGE" />
          </div>
        </div>
        <div>
         
          <div className="flex justify-around items-center">
            <img className="w-[85px] h-[31px]" src={uba} alt="IMAGE" />
            <img className="w-[104px] h-[36px]" src={lbs} alt="IMAGE" />
          </div>
        </div>
        <div>
        
          <div className="flex justify-around items-center">
            <img className="w-[81px] h-[41px]" src={fate} alt="IMAGE" />
            <img className="w-[89px] h-[23px]" src={found} alt="IMAGE" />
          </div>
        </div>
        <div>
          <div className="flex justify-around items-center">
            <img className="w-[64px] h-[56px]" src={star} alt="IMAGE" />
            <img className="w-[121px] h-[24px]" src={spectrum} alt="IMAGE" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Trusted