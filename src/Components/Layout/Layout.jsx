import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout