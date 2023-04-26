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

  return (
    <div className="">
      <Navbar
        setLoginFormIsOpen={setLoginFormIsOpen}
        loginFormIsOpen={loginFormIsOpen}
        registerFormIsOpen={registerFormIsOpen}
        setRegisterFormIsOpen={setRegisterFormIsOpen}
      />
      <LoginForm
        setLoginFormIsOpen={setLoginFormIsOpen}
        loginFormIsOpen={loginFormIsOpen}
      />
      <RegisterForm
        registerFormIsOpen={registerFormIsOpen}
        setRegisterFormIsOpen={setRegisterFormIsOpen}
      />
      <main className="">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
