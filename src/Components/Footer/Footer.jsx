import React from 'react'
import inlogo from '../../assets/instagram.svg'
import twlogo from "../../assets/twitter.svg";
// import twlogo from '../../assets/newtwi.jpg'
import lilogo from "../../assets/linkedin.svg";
import fblogo from "../../assets/facebook.svg";
import Footerbot from '../Footerbot/Footerbot';
import * as Yup from "yup";
import { useFormik } from "formik";


const Footer = () => {


   const initialValues = {
     email: "",
     fullName:"",
     message:"",
   };
  
   const schema = Yup.object({
     email: Yup.string()
       .required("Email is required")
       .email("invalid Email format"),
     fullName: Yup.string()
       .required("Full Name is required"),
        message: Yup.string()
       .required("Kindly leave a message"),
   });
   const onSubmit = async (values) => {
     console.log(values);
     const data = {
       email: values.email,
       message: values.message,
     };
   };
    
   const { values, handleSubmit, handleChange, errors, touched } = useFormik({
     initialValues,
     validationSchema: schema,
     onSubmit,
   });
   console.log(errors);
   
  return (
    <section>
      <div className="bg-bblack xs:block xmd:flex justify-around py-[44px]">
        <div className="xs:px-[20px] xmd:px-0 ">
          <div className="xs:mt-[54px] xmd:mt-[60px]">
            <a
              href="https://docs.google.com/forms/d/1Cp4CvmytGfSDz79f-gIh9xMs7jQLo4xvEzagjTWxtdQ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="bg-white rounded-[10px] xs:py-[9px] xmd:py-[0px] xs:w-[119px] xmd:w-[128px] xs:h[33px] xmd:h-[41px] font-DmSans font-medium xs:text-[14px] xmd:text-[16px]"
              >
                Contact Us
              </button>
            </a>
            <h4 className="font-DmSans font-[900] xs:text-[30px] xmd:text-[36px] lg:text-[40px] xl:text-[50px] text-ablack xs:leading-[30px] xmd:leading-[36px] lg:leading-[40px] xl:leading-[50px] pt-[56px]">
              Ready to <br />{" "}
              <span className="text-white">take the next step?</span>{" "}
            </h4>
            <h2 className="font-DmSans font-normal xs:text-[16px] xmd:text-[18px]  xl:text-[20px] text-white xs:pt-[24px] xmd:pt-[26px] xs:pb-[58px] xmd:pb-[70px] lg:pb-[78px] xl:pb-[90px]">
              Reach out to us to kickstart your journey.
            </h2>
          </div>
          <div className="xs:hidden xmd:block">
            <div className="flex gap-[46px]">
              <a
                href="http://www.Facebook.com/Employ9ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fblogo} alt="LOGO" />
              </a>

              <a
                href="http://www.x.com/EmployNigeria"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={twlogo} alt="LOGO" />
              </a>
              <a
                href="http://www.instagram.com/employ_africa"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={inlogo} alt="LOGO" />
              </a>

              <a
                href="http://www.LinkedIn.com/company/employafrica22"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={lilogo} alt="LOGO" />
              </a>
            </div>
          </div>
        </div>
        <div className="xs:px-[20px] xmd:px-0">
          <form
            onSubmit={handleSubmit}
            className=" xs:w-[100%] xmd:w-[375px] lg:w-[425px] xl:w-[528px] bg-cblack px-[39px] py-[32px] rounded-[20px]"
            action=""
          >
            <div>
              <label
                className="block pb-[5px] text-white font-DmSans font-semibold xs:text-[14px] xmd:text-[16px]"
                htmlFor=""
              >
                Your Name
              </label>
              <input
                className="w-[100%] h-[52px] pl-[24px] font-DmSans font-extralight xs:text-[12px] xmd:text-[16px] bg-agray text-newwhite rounded-[6px] outline-none"
                type="text"
                name="fullName"
                onChange={handleChange}
                value={values.fullName}
                placeholder="Enter your name"
              />
              {errors.fullName && touched.fullName ? (
                <p className="text-red-700">{errors.fullName}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label
                className="block pt-[18px] pb-[5px] text-white font-DmSans font-semibold xs:text-[14px] xmd:text-[16px]"
                htmlFor=""
              >
                Email Address
              </label>
              <input
                className="w-[100%] h-[52px] pl-[24px] font-DmSans font-extralight xs:text-[12px] xmd:text-[16px] bg-agray text-newwhite rounded-[6px] outline-none"
                onChange={handleChange}
                value={values.email}
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              {errors.email && touched.email ? (
                <p className="text-red-700">{errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label
                className="block pt-[18px] pb-[5px] text-white font-DmSans font-semibold xs:text-[14px] xmd:text-[16px]"
                htmlFor=""
              >
                Your Message
              </label>
              <textarea
                onChange={handleChange}
                value={values.message}
                id=""
                className="w-[100%] h-[109px] pt-[10px] pl-[24px] font-DmSans font-extralight xs:text-[12px] xmd:text-[16px] bg-agray text-newwhite rounded-[6px] outline-none"
                type="text"
                name="message"
                placeholder="Enter your message"
              ></textarea>
              {errors.message && touched.message ? (
                <p className="text-red-700">{errors.message}</p>
              ) : (
                ""
              )}
            </div>
            <a href="mailto:hello@employafrica.org">
              <button
                type="button"
                className="w-[100%] h-[52px] rounded-[6px] text-white font-DmSans xs:text-[12px] xmd:text-[16px] font-semibold bg-cgray mt-[32px]"
              >
                Send Messsage
              </button>
            </a>
          </form>
          <div className="flex gap-[30px] xs:visible xmd:invisible justify-center pt-[76px] ">
            <a
              href="http://www.Facebook.com/Employ9ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fblogo} alt="LOGO" />
            </a>

            <a
              href="http://www.x.com/EmployNigeria"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={twlogo} alt="LOGO" />
            </a>
            <a
              href="http://www.instagram.com/employ_africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={inlogo} alt="LOGO" />
            </a>

            <a
              href="http://www.LinkedIn.com/company/employafrica22"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={lilogo} alt="LOGO" />
            </a>
          </div>
        </div>
      </div>
      <Footerbot />
    </section>
  );
}

export default Footer