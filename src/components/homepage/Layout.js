/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { useState } from 'react';
import LoginForm from './login-form';
import RegisterForm from './register-form';

function Layout(props) {
  const [loginFormIsOpen, setLoginFormIsOpen] = useState(false);
  const [registerFormIsOpen, setRegisterFormIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Navbar
        setLoginFormIsOpen={setLoginFormIsOpen}
        loginFormIsOpen={loginFormIsOpen}
        registerFormIsOpen={registerFormIsOpen}
        setRegisterFormIsOpen={setRegisterFormIsOpen}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
