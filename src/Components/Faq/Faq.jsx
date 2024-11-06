import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Fade from "@mui/material/Fade";
import faqvec from "../../assets/faqvec.png";

const Faq = () => {
     const [expanded, setExpanded] = React.useState(false);
     const [expanded2, setExpanded2] = React.useState(false);
     const [expanded3, setExpanded3] = React.useState(false);
     const [expanded4, setExpanded4] = React.useState(false);

     const handleExpansion = () => {
       setExpanded((prevExpanded) => !prevExpanded);
     };
     const handleExpansion2 = () => {
       setExpanded2((prevExpanded) => !prevExpanded);
     };
      const handleExpansion3 = () => {
        setExpanded3((prevExpanded) => !prevExpanded);
      };
       const handleExpansion4 = () => {
         setExpanded4((prevExpanded) => !prevExpanded);
       };
  return (
    // <section className="xs:block xmd:flex font-DmSans bg-lightorange xs:pt-[120px] xmd:pt-[89px]">
    <section className="relative xs:block xmd:flex justify-evenly font-DmSans bg-accord xs:pt-[120px] xsm:pt-[124px] xmd:pt-[89px] xs:pb-[102px] xsm:pb-[116px] xmd:pb-[151px]">
      <div>
        <div className="flex xs:justify-center xmd:justify-start">
          <h3 className="font-light text-[16px] text-orange border-[1px] bg-lightorange text-center w-[83px] py-[10px] rounded-[10px]">
            FAQs
          </h3>
        </div>
        <div className="sm:flex sm:justify-center">
          <h3 className="sm:w-[350px] xs:pt-[24px] xsm:pt-[28px] xs:pb-[94px] xmd:pb-[0px] xmd:pt-[16px] xmd:w-[280px] lg:w-[310px] xl:w-[350px] font-black xs:text-[30px] xsm:text-[36px] xmd:text-[42px] lg:text-[50px] xl:text-[60px] xs:leading-[39px] xsm:leading-[45px] xmd:leading-[62px] lg:leading-[68px] xl:leading-[78px] xs:text-center xmd:text-left">
            Frequently Asked Questions
          </h3>
        </div>
        <img
          className="absolute left-[0%] bottom-[20px] w-[8%] xs:hidden xmd:block "
          src={faqvec}
          alt="IMAGE"
        />
        <img
          className="absolute left-[0%] top-[40%] w-[20%] xs:block xmd:hidden "
          src={faqvec}
          alt="IMAGE"
        />
      </div>
      <div className="xs:flex xs:justify-center">
        <div className="xs:w-[387px] xsm:w-[440px] xmd:w-[651px]">
          <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              width: "90%",
              backgroundColor: "#FFF9F7",
              border: "none",
              boxShadow: "none",

              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}

              expandIcon={
                expanded ? (
                  <RemoveIcon
                    sx={{
                      width: "38px",
                      height: "38px",
                      backgroundColor: "#E03500",
                      border: "none",
                      borderRadius: "6px 0 0 6px",
                      padding: "10px",
                      color: "white",
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      width: "38px",
                      height: "38px",
                      backgroundColor: "#000000",
                      border: "none",
                      borderRadius: "0 6px 6px 0",
                      padding: "10px",
                      color: "white",
                    }}
                  />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="flex xs:gap-[18px] xsm:gap-[22px] xmd:gap-[31px]">
                <h3 className="font-extrabold xs:text-[14px] xsm:text-[16px] xmd:text-[19px]">
                  01
                </h3>
                <h3 className="font-bold xs:text-[14px] xsm:text-[16px] xmd:text-[20px] xmd:w-[459px]">
                  How do I get onboarded as a jobseeker?
                </h3>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className=" xs:pl-[31px] xsm:pl-[39px] xmd:pl-[53px] xs:text-[12px] xmd:text-[15px] font-normal xs:w-[309px] xmd:w-[527px] xs:leading-[19px] xmd:leading-[28px]">
                You can download from playstore, create an account, check your
                email for your OTP and fill it in space provided on the mobile
                app. Then build your profile to be easily seen by a recruiter,
                access jobs, apply for jobs easily, get application review
                updates and recruiter feedbacks when you don’t land a job. You
                would also get several job updates as time goes on.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded2}
            onChange={handleExpansion2}
            sx={{
              width: "90%",
              backgroundColor: "#FFF9F7",
              border: "none",
              boxShadow: "none",
              "& .MuiAccordion-region": { height: expanded2 ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded2 ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded2 ? (
                  <RemoveIcon
                    sx={{
                      width: "38px",
                      height: "38px",
                      backgroundColor: "#E03500",
                      border: "none",
                      borderRadius: "6px 0 0 6px",
                      padding: "10px",
                      color: "white",
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      width: "38px",
                      height: "38px",
                      backgroundColor: "#000000",
                      border: "none",
                      borderRadius: "0 6px 6px 0",
                      padding: "10px",
                      color: "white",
                    }}
                  />
                )
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <div className="flex xs:gap-[18px] xsm:gap-[22px] xmd:gap-[31px]">
                <h3 className="font-extrabold xs:text-[14px] xsm:text-[16px] xmd:text-[19px]">
                  02
                </h3>
                <h3 className="font-bold xs:text-[14px] xsm:text-[16px] xmd:text-[20px] xmd:w-[459px]">
                  How do I get onboarded as a recruiter?
                </h3>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className=" xs:pl-[31px] xsm:pl-[39px] xmd:pl-[53px] xs:text-[12px] xmd:text-[15px] font-normal xs:w-[309px] xmd:w-[527px] xs:leading-[19px] xmd:leading-[28px]">
                You can download from our playstore account, create an account,
                check your email for your OTP and fill it in space provided on
                the App interface. Then build your profile to be easily trusted
                by jobseekers, post jobs for FREE, access applicaHons in hours
                and scan through profiles and CVs. You would also get applicaHon
                updates as Hme goes on.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded3}
            onChange={handleExpansion3}
            sx={{
              width: "90%",
              backgroundColor: "#FFF9F7",
              border: "none",
              boxShadow: "none",
              "& .MuiAccordion-region": { height: expanded3 ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded3 ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded3 ? (
                  <RemoveIcon
                    sx={{
                      width: "38px",
                      height: "38px",
                      backgroundColor: "#E03500",
                      border: "none",
                      borderRadius: "6px 0 0 6px",
                      padding: "10px",
                      color: "white",
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      width: "38px",
                      height: "38px",
                      backgroundColor: "#000000",
                      border: "none",
                      borderRadius: "0 6px 6px 0",
                      padding: "10px",
                      color: "white",
                    }}
                  />
                )
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <div className="flex xs:gap-[18px] xsm:gap-[22px] xmd:gap-[31px]">
                <h3 className="font-extrabold xs:text-[14px] xsm:text-[16px] xmd:text-[19px]">
                  03
                </h3>
                <h3 className="font-bold xs:text-[14px] xsm:text-[16px] xmd:text-[20px] xmd:w-[459px]">
                  How can I logout of my account?
                </h3>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className=" xs:pl-[31px] xsm:pl-[39px] xmd:pl-[53px] xs:text-[12px] xmd:text-[15px] font-normal xs:w-[309px] xmd:w-[527px] xs:leading-[19px] xmd:leading-[28px]">
                To log-out, you need to go to the se_ngs part to log out from
                the account. You can also delete the account too.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded4}
            onChange={handleExpansion4}
            sx={{
              width: "90%",
              backgroundColor: "#FFF9F7",
              border: "none",
              boxShadow: "none",
              "& .MuiAccordion-region": { height: expanded4 ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded4 ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded4 ? (
                  <RemoveIcon
                    sx={{
                      width: "38px",
                      height: "38px",
                      backgroundColor: "#E03500",
                      border: "none",
                      borderRadius: "6px 0 0 6px",
                      padding: "10px",
                      color: "white",
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      width: "38px",
                      height: "38px",
                      backgroundColor: "#000000",
                      border: "none",
                      borderRadius: "0 6px 6px 0",
                      padding: "10px",
                      color: "white",
                    }}
                  />
                )
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <div className="flex xs:gap-[18px] xsm:gap-[22px] xmd:gap-[31px]">
                <h3 className="font-extrabold xs:text-[14px] xsm:text-[16px] xmd:text-[19px]">
                  04
                </h3>
                <h3 className="font-bold xs:text-[14px] xsm:text-[16px] xmd:text-[20px] xmd:w-[459px]">
                  What if i don’t have a CV ?
                </h3>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className=" xs:pl-[31px] xsm:pl-[39px] xmd:pl-[53px] xs:text-[12px] xmd:text-[15px] font-normal xs:w-[309px] xmd:w-[527px] xs:leading-[19px] xmd:leading-[28px]">
                COMING SOON!
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq