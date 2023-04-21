/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="h-auto">{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
