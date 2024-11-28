import React from 'react'
import heroimg from "../../assets/Frame4.png";
import pos1 from "../../assets/pos1.png";
import pos2 from "../../assets/pos2.png";
import heroimg2 from '../../assets/heroimg2.png'
import * as Yup from "yup";
import { useFormik } from "formik";

const Herot = () => {
    const initialValues = {
      email: "",
    };
      const schema = Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("invalid Email format"),
      });
        const onSubmit = async (values) => {
          console.log(values);
        };
          const { values, handleSubmit, handleChange, errors, touched } =
            useFormik({
              initialValues,
              validationSchema: schema,
              onSubmit,
            });
  return (
    <div className="bg-white xs:px-[25px] xmd:px-[50px] xs:pt-[60px] xmd:pt-[135px] font-DmSans ">
      <div className="xs:block xmd:flex justify-between lg:gap-[60px] xl:gap-0">
        <div>
          <h4 className="xs:w-[100%] xmd:w-[400px] lg:w-[520px] xl:w-[684px] font-bold xs:text-center xmd:text-left xs:text-[25px] sm:text-[36px] xsm:text-[40px]  xmd:text-[40px] lg:text-[44px] xl:text-[60px] xs:pb-[24px] xmd:pb-[34px] xs:leading-[41px] xsm:leading-[50px] xmd:leading-[52px] lg:leading-[60px] xl:leading-[78px] tracking-[-3%]">
            <span className="text-orange">Connecting</span> businesses to{" "}
            verified African
            <span className="text-orange"> Talent</span> and{" "}
            <span className="text-orange">Global</span> opportunities.
          </h4>
          <p className="xs:text-center xmd:text-left font-normal text-black xs:text-[12px] xmd:text-[14px] lg:text-[16px] xl:text-[20px] xs:leading-[20px] lg:leading-[22px] xl:leading-[26px] xs:w-[100%] xmd:w-[373px] lg:w-[420px] xl:w-[581px]">
            We help businesses access verified African talent and global
            opportunities in the{" "}
            <span className="font-extrabold">fastest, affordable</span> and most{" "}
            <span className="font-extrabold">convenient</span> way.
          </p>
          <form
            onSubmit={handleSubmit}
            className="xs:mt-[60px] xmd:mt-[74px] xs:flex xsm:justify-center xmd:justify-start relative"
            action=""
          >
            <input
              className="outline-none xs:w-[294px] xmd:w-[310px] lg:w-[340px] xl:w-[390px] xs:h-[38px] xmd:h-[51px] rounded-l-[6px] xs:pl-[24px] xmd:pl-[32px]"
              onChange={handleChange}
              value={values.email}
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <button type='button' className="xs:w-[64px] xmd:w-[86px] xs:h-[38px] xmd:h-[51px] bg-black text-white rounded-r-[6px]  xmd:text-[16px]">
              <a
                href="https://docs.google.com/forms/d/1Cp4CvmytGfSDz79f-gIh9xMs7jQLo4xvEzagjTWxtdQ/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join us
                </a>
            </button>
            {errors.email && touched.email ? (
              <p className="text-red-700 text-[16px] absolute left-0 bottom-[-20px] xsm:bottom-[-24px] xsm:left-[18%] md:left-[25%] xmd:left-0">
                {errors.email}
              </p>
            ) : (
              ""
            )}
          </form>
        </div>
        <div className="relative">
          <div>
            <img
              className="absolute xs:left-[-35%] xs:top-[-30px] sm:left-[-25%] sm:top-[-35px] xsm:left-[] xsm:top-[] xmd:left-[] xmd:top-[] lg:left-[-44%] lg:top-[-14%] xl:left-[-45%] xl:top-[-22%] xs:hidden xmd:block"
              src={pos1}
              alt="IMAGE"
            />
            <img
              className="absolute xs:left-[-35%] xs:bottom-[-290px] xsm:left-[] xsm:bottom-[] xmd:left-[] xmd:bottom-[] lg:left-[-52%] lg:bottom-[22%] xl:left-[-52%] xl:bottom-[-22%] xs:hidden xmd:block"
              src={pos2}
              alt="IMAGE"
            />
          </div>

          <img
            className="shadow-customblack rounded-[4px] xs:hidden xmd:block lg:w-[100%]"
            src={heroimg}
            alt="IMAGE"
          />
        </div>
        <div className="xs:flex xs:justify-end xsm:justify-center xs:mr-[40px] relative ">
          <img
            className="shadow-customblack rounded-[4px] xs:block xmd:hidden mt-[54px]"
            src={heroimg2}
            alt="IMAGE"
          />
          <img
            className="absolute xs:left-[-28%] xs:bottom-[-15%] sm:left-[-18%] sm:bottom-[-20%] xsm:left-[-6%] xsm:bottom-[-25%] xs:block xmd:hidden xs:w-[80%] xsm:w-[60%]"
            src={pos2}
            alt="IMAGE"
          />
          <img
            className="absolute xs:left-[-21%] xs:top-[10px] w-[80%] sm:left-[-12%] sm:top-[-6px] xsm:left-[-3%] xsm:top-[-20px] xsm:w-[60%] xmd:hidden"
            src={pos1}
            alt="IMAGE"
          />
        </div>
      </div>
      <p className=" font-semibold xs:text-[16px] xsm:text-[20px] xmd:text-[24px] xs:pt-[85px] xmd:pt-[120px] lg:pt-[160px] xl:pt-[202px] xs:pb-[12px] xmd:pb-[15px] text-center">
        We are Trusted by
      </p>
    </div>
  );
}

export default Herot