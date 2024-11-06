/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "425px",
      xsm: "600px",
      md: "768px",
      xmd: "800px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        orange: "#E03500",
        white: "#FFF9F7",
        ablack: "#404040",
        bblack: "#101010",
        cblack: "#1C1C1C",
        dblack: "#000000",
        fblack: "#212020",
        agray: "#313131",
        bgray: "#646464",
        cgray: "#4A4A4A",
        dgray: "#828282",
        egray: "#C2C2C2",
        fgray: "#F6F6F699",
        jgray: "#D8D8D8",
        bwhite: "#EDEDED",
        offwhite: "#F3F3F3",
        lightorange: "#E035000D",
        newwhite: "#FFFFFF",
        notwhite: "#FAFAFA",
        mycolor: "#FFFCFB",
        bwhite: "#E9E9E9",
        adu: "#383838",
        offgray: "#606060",
        neworange: "#FC6A01",
        colcol: "#2323230D",
        newcol: "#FFF9F7E0",
        fefefe: "#FEFEFE",
        accord: "#FFF9F7",
      },
      fontFamily: {
        DmSans: ["DM Sans"],
      },
      boxShadow: {
        customblack: "9px 9px 1px #000000",
        customorange: "9px 9px 1px #E03500",
        customwhite: "9px 9px 1px #FFFFFF",
      },
      backgroundImage: {
        bgimg:
          'url("https://res.cloudinary.com/dizfuix3a/image/upload/v1723038297/bgimg_kkwwam.png")',
        newimg:
          'url("https://res.cloudinary.com/dizfuix3a/image/upload/v1723154937/ppimage_xecsdq.png")',
        idimg:
          'url("https://res.cloudinary.com/dizfuix3a/image/upload/v1723459301/identityimg_cro1p9.png")',
        misbg:
          'url("https://res.cloudinary.com/dizfuix3a/image/upload/v1723458254/MissionBG_s4ctpk.png")',
        boutimg:
          'url("https://res.cloudinary.com/dizfuix3a/image/upload/v1723204038/ppimage_ldxq7s.png")',
      },
    },
  },
  plugins: [],
};
