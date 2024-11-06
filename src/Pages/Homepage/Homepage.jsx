import React from 'react'
import Herot from '../../Components/Hero/Herot';
import slot from '../../assets/slot.svg'
import rev from "../../assets/revo.svg";
import uba from "../../assets/uba.svg";
import lbs from "../../assets/lbs.svg";
import fate from "../../assets/fate.svg";
import found from "../../assets/found.svg";
import star from "../../assets/star.svg";
import spectrum from "../../assets/spectrum.svg";
import Subhero from '../../Components/Subhero/Subhero';
import vec4 from '../../assets/vec4.png'
import Damhero from '../../Components/Damhero/Damhero';
import sidevec from '../../assets/sidevec.png'
import Underhero from '../../Components/Underhero/Underhero';
import Testimonial from '../../Components/Testimonial/Testimonial';
import gplay from '../../assets/gplay.svg'
import iphone from '../../assets/iphone.png'
import Faq from '../../Components/Faq/Faq';
import Card from '../../Components/Card/Card';
import Cardxx from '../../Components/Cardxx/Cardxx';
import pos2 from "../../assets/pos2.png";
import Trusted from '../../Components/Trustedby/Trusted';






const Homepage = () => {
  return (
    <section className="overflow-x-hidden">
      <Herot />
      <div className=" bg-offwhite  py-[26px] xs:hidden xmd:block  ">
        <div className="flex justify-evenly items-center">
          <img className="w-[76px] h-[20px]" src={slot} alt="IMAGE" />
          <img className="w-[84px] h-[57px]" src={rev} alt="IMAGE" />
          <img className="w-[85px] h-[31px]" src={uba} alt="IMAGE" />
          <img className="w-[104px] h-[36px]" src={lbs} alt="IMAGE" />
          <img className="w-[81px] h-[41px]" src={fate} alt="IMAGE" />
          <img className="w-[89px] h-[23px]" src={found} alt="IMAGE" />
          <img className="w-[64px] h-[56px]" src={star} alt="IMAGE" />
          <img className="w-[121px] h-[24px]" src={spectrum} alt="IMAGE" />
        </div>
      </div>
      <div className="xs:block xmd:hidden">
        <Trusted />
      </div>
      <Subhero />
      <div className="relative">
        <div className="relative">
          <div>
            <img
              className="absolute xs:top-[8%] xs:left-[-10%] xsm:top-[5%] md:top-[-3%] md:left-[-4%] xmd:top-[] xmd:left-[] lg:top-[17%] lg:left-[2%] xl:top-[13%] xl:left-[5%] xs:w-[40%] xmd:w-[25%]"
              src={pos2}
              alt="IMAGE"
            />
          </div>
          <div className="flex justify-center">
            <h2 className=" font-DmSans font-light xs:text-[28px] xs:w-[304px] xsm:text-[30px] lg:text-[32px] xl:text-[36px] xsm:w-[450px] xmd:text-[60px] xmd:w-[450px] lg:w-[702px] xl:w-[861px] text-center xs:leading-[40px] xmd:leading-[44px] lg:leading-[46px] xl:leading-[65px] xs:py-[80px] xsm:py-[120px] xmd:py-[150px] lg:py-[180px] xl:py-[240px]">
              <span className="font-extrabold text-orange">Worry no more</span>{" "}
              about fake talents or recruiters spamming you
            </h2>
          </div>

          <div>
            <img
              className="absolute xs:bottom-[7%] xs:right-[1%] md:bottom-[-4%] md:right-[7%] xmd:bottom-[13%] xmd:right-[14%] lg:bottom-[17%] lg:right-[14%] xl:bottom-[13%] xl:right-[14%] xs:w-[40%] xmd:w-[25%]"
              src={pos2}
              alt="IMAGE"
            />
          </div>
        </div>

        <div>
          <img
            className="absolute right-[0%] top-[50%] xs:w-[8%]"
            src={vec4}
            alt="IMAGE"
          />
        </div>
      </div>
      <div className="xs: hidden xmd:block">
        <Damhero />
      </div>
      <div className="xs: block xmd:hidden">
        <Card />
        <Cardxx />
      </div>

      <div className="relative xs:hidden xmd:block ">
        <h3 className="text-center font-DmSans xmd:text-[40px] lg:text-[45px] xl:text-[60px] font-normal xmd:leading-[45px] lg:leading-[50px] xl:leading-[65px] xmd:py-[140px] lg:py-[180px] xl:py-[240px]">
          <span className="text-orange font-extrabold">Save time </span>
          by recruiting quality talent in <br /> minutes. Get recruitment
          feedback fast
        </h3>

        <div>
          <img
            className="absolute right-[0%] top-[55%]"
            src={sidevec}
            alt="IMAGE"
          />
          <img
            className="absolute xl:top-[12%] xl:left-[5%] lg:top-[16%] lg:left-[-2%] xmd:top-[12%] xmd:left-[5%] w-[25%] "
            src={pos2}
            alt="IMAGE"
          />
          <img
            className="absolute xmd:bottom-[12%] xmd:right-[12%] lg:bottom-[16%] lg:right-[8%] xl:bottom-[12%] xl:right-[12%] w-[25%]"
            src={pos2}
            alt="IMAGE"
          />
        </div>
      </div>
      <div className="xs:hidden xmd:block">
        <Underhero />
      </div>

      <div className="relative font-DmSans xs:py-[80px] xsm:py-[100px] xmd:py-[150px] bg-notwhite xmd:hidden">
        <img
          className="absolute top-[32px] left-[-8%] w-[35%] sm:top-[26px] xsm:top-[14px] md:top-[-12px] md:left-[1%]"
          src={pos2}
          alt="IMAGE"
        />
        <div className="flex justify-center">
          <h3 className="font-normal text-center  xs:text-[26px] xs:w-[309px] xsm:w-[440px] xmd:w-[520px] lg:w-[710px] xl:w-[987px] xsm:text-[38px] xmd:text-[50px] lg:text-[40px] xl:text-[50px] xs:leading-[40px] xsm:leading-[50px] xmd:leading-[65px]">
            <span className="font-extrabold text-orange">Recruit </span>
            top-notch talent in a few steps.Land your dream job
          </h3>
        </div>

        <img
          className="absolute bottom-[8%] right-[6%] xsm:bottom-[3%] xsm:right-[8%] md:bottom-[-8%] md:right-[12%] w-[40%] "
          src={pos2}
          alt="IMAGE"
        />
      </div>

      <div className="relative font-DmSans xs:py-[80px] xsm:py-[100px] xmd:py-[110px] lg:py-[130px] xl:py-[150px] bg-notwhite xs:hidden xmd:block">
        <div className="flex justify-center">
          <h3 className="font-normal text-center  xs:text-[26px] xs:w-[309px] xsm:w-[340px] xmd:w-[520px] lg:w-[710px] xl:w-[987px] xmd:text-[38px] lg:text-[40px] xl:text-[50px] xsm:text-[38px]  xs:leading-[40px] xsm:leading-[50px] xmd:leading-[55px] xl:leading-[65px]">
            <span className="font-extrabold text-orange">Recruit </span>
            top-notch talent in a few steps. <br />
            Land your dream job
          </h3>
        </div>
        <img
          className="absolute xmd:top-[-2%] xmd:left-[70px] lg:top-[8%] lg:left-[40px] xl:top-[-2%] xl:left-[70px] w-[25%] "
          src={pos2}
          alt="IMAGE"
        />
        <img
          className="absolute xmd:bottom-[-2%] xmd:right-[11%] lg:bottom-[10%] lg:right-[11%] xl:bottom-[-2%] xl:right-[11%] w-[25%] "
          src={pos2}
          alt="IMAGE"
        />
      </div>
      <Testimonial />
      <div className="xs:block xmd:flex justify-around font-DmSans py-[62px] bg-bgimg  bg-mycolor">
        <div className=" xs:py-[68px] xsm:py-[90px] xmd:py-[100px] xl:py-[120px] xmd:pl-[40px] lg:pl-[30px] xl:pl-0">
          <div className="xs:flex justify-center">
            <h3 className="xs:w-[353px] xsm:w-[412px] xmd:w-[490px] lg:w-[550px] xl:w-[618px] font-bold xs:text-[30px] xsm:text-[36px] xmd:text-[40px] lg:text-[42px] xl:text-[50px] xs:leading-[39px] xsm:leading-[45px] xmd:leading-[50px] lg:leading-[54px] xl:leading-[66px] pb-[34px] xs:text-center xmd:text-left">
              Download our Mobile App to enjoy all these benefits
            </h3>
          </div>
          <p className="xs:text-center xmd:text-left  font-normal xs:text-[16px] xmd:text-[18px] xl:text-[20px] xs:leading-[20px] xmd:leading-[26px] xs:pb-[59px] xsm:pb-[65px] xmd:pb-[80px] ">
            You can get our mobile app from PlayStore <br /> Click on the button
            below to get it now
          </p>
          <div className="flex  xs:justify-center xmd:justify-start">
            <a
              href="http://bit.ly/DownloadEmployNow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer xs:w-[204px] xsm:w-[230px] xmd:w-[250px] xl:w-[329px]"
                src={gplay}
                alt="IMAGE"
              />
            </a>
          </div>
        </div>
        <div className="bg-newwhite border-[1px] border-bwhite rounded-[4px] xs:h-[302px] xsm:h-[332px] xmd:h-[380px] lg:h-[420px] xl:h-[480px] shadow-customorange xs:mt-[68px] xsm:mt-[74px] xmd:mt-[80px] xl:mt-[90px] xs:w-[269px] xsm:w-[299px] xmd:w-[340px] lg:w-[380px] xl:w-[428px] xs:mx-auto xl:mx-0 ">
          <div className="relative right-[10%] bottom-[17%] xs:w-[299px] xsm:w-[329px] xmd:w-[380px] lg:w-[425px] xl:w-[475px]">
            <img className="" src={iphone} alt="IMAGE" />
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
}

export default Homepage