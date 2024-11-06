import Homepage from "./Pages/Homepage/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./Pages/Pricing/Pricing";
import Layout from "./Components/Layout/Layout";
import Pricingplan from "./Pages/Pricingplan/Pricingplan";
import AboutUs from "./Pages/AboutUs/AboutUs";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricingplan" element={<Pricingplan />} />
            <Route path="/about" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
