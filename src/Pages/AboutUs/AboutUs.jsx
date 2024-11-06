import React from 'react'
import idimg1 from '../../assets/idimg1.png'
import idimg2 from "../../assets/idimg2.png";
import Download from '../../Components/Download/Download';
import Values from '../../Components/Values/Values';
import lefta from '../../assets/lefta.png'

const AboutUs = () => {
  return (
    <section className="font-DmSans">
      <div className="xs:py-[62px] xsm:py-[80px] xmd:py-[120px] lg:py-[160px] xl:py-[210px] bg-no-repeat bg-cover bg-center bg-boutimg bg-dblack text-newwhite text-center">
        <div className="flex justify-center">
          <h3 className="font-bold xs:text-[32px] xsm:text-[36px] xmd:text-[42px] lg:text-[50px] xl:text-[60px] xs:leading-[41px] xsm:leading-[45px] xmd:leading-[58px] lg:leading-[68px] xl:leading-[78px] xs:w-[] xsm:w-[] xmd:w-[620px] lg:w-[850px] xl:w-[1063px] text-center xs:pb-[36px] xsm:pb-[44px] xmd:pb-[62px] lg:pb-[78px] xl:pb-[97px]">
            Powering <span className="font-black">African businesses</span> and
            helping African talent achieve their career goals.
          </h3>
        </div>

        <div className="flex justify-center xmd:pt-[62px] lg:pt-[72px] xl:pt-[97px]">
          <a
            href="http://bit.ly/DownloadEmployNow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-medium text-[16px] w-[149px] h-[51px] bg-orange text-newwhite border-[1px] border-none rounded-[6px]">
              Create Account
            </button>
          </a>
        </div>
      </div>
      <div className="bg-idimg bg-no-repeat bg-cover bg-newwhite xs:px-[40px] xsm:px-[60px] xmd:px-0 xs:pt-[102px] xsm:pt-[110px] xmd:pt-[136px] xs:pb-[50px] xsm:pb-[60px] xmd:pb-[75px]">
        <h3 className="font-bold text-[16px] w-[141px] h-[51px] border-[1px] rounded-[10px] text-center py-[10px] bg-colcol xmd:ml-[8%] xl:ml-[13%]">
          OUR IDENTITY
        </h3>
        <div className="xs:block xmd:flex xmd:justify-evenly ">
          <div>
            <h3 className="font-bold xs:text-[34px] xsm:text-[40px] xmd:text-[50px] lg:text-[58px] xl:text-[70px] text-orange xs:pb-[38px] xsm:pb-[44px] xmd:pb-[53px] xmd:pt-[]">
              Our Identity
            </h3>
            <p className="font-normal xs:text-[16px] xsm:text-[20px]  xmd:text-[22px] xl:text-[24px] xs:w-[] xsm:w-[] xmd:w-[390px] lg:w-[425px] xl:w-[541px]">
              Powering African businesses and helping African talent achieve
              their career goals. <br /> <br />
              <span className="font-semibold">Employ</span> is a recruitment
              platform where businesses can access qualified and verified talent
              in the fastest, affordable and convenient way. <br />
              <br /> We also help businesses scale faster by connecting them to
              fundraising and networking opportunities. <br />
              <br />{" "}
              <span className="font-semibold">
                This is why we started the company.
              </span>
            </p>
          </div>
          <div className="">
            <div className="xs:pt-[44px]">
              <img
                className="rounded-[20px] border-[1px] border-black xs:w-[70%] xmd:w-[80%] xl:w-[90%] relative"
                src={idimg1}
                alt="IMAGE"
              />
              <img
                className="rounded-[20px] relative xs:left-[40px] xsm:left-[84px] xmd:left-[66px] xs:top-[-13px] xsm:top-[-26px]  xmd:top-[-3%] xmd:ml-[] border-[1px] border-black xs:w-[70%] xmd:w-[80%] xl:w-[90%]"
                src={idimg2}
                alt="IMAGE"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-misbg bg-no-repeat bg-cover bg-center bg-newcol xs:flex xs:flex-col-reverse xmd:flex xmd:flex-row xmd:justify-evenly xs:py-[75px] xsm:py-[90px] xmd:py-[100px] lg:py-[130px] xl:py-[180px] xs:pl-[18px] xsm:px-[44px] xmd:px-[0px]">
        <div>
          <h3 className="font-semibold xs:text-[16px] xsm:text-[] xmd:text-[20px] xl:text-[24px] xs:leading-[20px] xmd:leading-[31px] xs:w-[365px] xsm:w-[430px] xmd:w-[480px] lg:w-[505px] xl:w-[575px] xs:pt-[40px] xmd:pt-[65px]">
            Our mission{" "}
            <span className="font-normal">
              is democralizing quality African talent and opportunities for
              businesses in the most fast, affordable and convenient way.
            </span>{" "}
            <br /> <br />
            This is what we would become in the future.
          </h3>
        </div>
        <div>
          <h3 className="w-[151px] h-[41px] border-[1px] text-center pt-[8px] rounded-[10px] bg-lightorange text-[16px] font-bold text-orange">
            OUR MISSION
          </h3>
          <h3 className="font-bold xs:pt-[34px] xmd:pt-0 xs:text-[34px] xsm:text-[40px] xmd:text-[60px] lg:text-[68px] xl:text-[80px] xmd:w-[328px] xs:leading-[] xsm:leading-[] xmd:leading-[78px] lg:leading-[98px] xl:leading-[108px]">
            Our Mission
          </h3>
        </div>
      </div>
      <div className="bg-fefefe xs:pt-[49px] xsm:pt-[62px] xmd:pt-[71px]  xs:pb-[72px] xsm:pb-[110px] lg:pb-[130px] xl:pb-[180px] relative">
        <img
          className="absolute xmd:left-0 xs:top-[30%] xmd:top-[20%] xs:w-[8%] xmd:w-[5%]"
          src={lefta}
          alt="IMAGE"
        />
        <div className="flex justify-center ">
          <h3 className="w-[151px] h-[41px] border-[1px] text-center pt-[8px] rounded-[10px] bg-lightorange text-[16px] font-bold text-orange">
            OUR VISSION
          </h3>
        </div>
        <h3 className="font-bold xs:text-[34px] xsm:text-[44px] xmd:text-[60px] lg:text-[68px] xl:text-[80px] pt-[34px] xs:pb-[28px] xmd:pb-[44px] text-center">
          Our Vision
        </h3>
        <div className="flex justify-center">
          <p className="font-normal xs:text-[12px] xsm:text-[16px] xmd:text-[24px] text-center border-[0.5px] border-jgray xs:rounded-[5px] xmd:rounded-[12px] bg-newwhite  xs:py-[22px] xmd:py-[48px] xs:w-[85%] xmd:w-[55%] shadow-md">
            Our vision is be{" "}
            <span className="font-medium">Africa most preferred</span>{" "}
            recruitment company by <span className="font-medium">2033</span>.{" "}
          </p>
        </div>
      </div>
      <Values />
      <Download />
    </section>
  );
}

export default AboutUs