/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLogInOutline } from 'react-icons/io5';
import { HiOutlineViewList } from 'react-icons/hi';

function Navbar({
  setLoginFormIsOpen,
  loginFormIsOpen,
  registerFormIsOpen,
  setRegisterFormIsOpen,
  openMenu,
  setOpenMenu,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    {
      name: 'Seja um revendedor',
      link: '/',
      checkLogin: true,
    },
    {
      name: 'Compra rápida',
      link: '/products',
    },
    {
      name: 'Contato',
      link: '/',
    },
    {
      name: 'ENTRAR',
      link: '/dashboard',
      checkLogin: true,
      icon: IoLogInOutline,
    },
  ];

  //check login method will be implemented later

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll) === 0;
  }, []);

  return (
    <nav
      onScroll={() => isScrolled === 0}
      className={`
      ${
        isScrolled || openMenu
          ? 'bg-darkpurple md:bg-opacity-95 max-sm:bg-opacity-100'
          : ''
      }
      w-full
      fixed
      overflow-hidden
      duration-300
      transition-all
      items-center ${openMenu ? 'h-80 z-50' : 'h-20'} duration-200 md:h-20`}
    >
      <div
        className={`max-w-screen-xl flex flex-col md:flex-row max-md:flex-wrap justify-between mx-auto p-5`}
      >
        <div className="flex max-sm:mb-10 items-center justify-between">
          <div className="flex ">
            <Link to={'/'}>
              <img src=".././images/logo.png" alt="" className="h-10" />
            </Link>
            <h1 className="font-pacifico drop-shadow-md  text-lg mt-2 ml-0 text-softpurple">
              Painel
            </h1>
          </div>
          <button className="ml-40">
            <HiOutlineViewList
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              className={` ${
                loginFormIsOpen
                  ? 'hidden'
                  : 'md:hidden text-white text-3xl mt-4 '
              }`}
            />
          </button>
        </div>
        {navLinks.map(({ name, link, icon }, id) => {
          return (
            <Link
              onClick={(e) => {
                switch (name) {
                  case 'ENTRAR':
                    e.preventDefault();
                    setLoginFormIsOpen(!loginFormIsOpen);
                    setOpenMenu(false);
                    break;
                  case 'Seja um revendedor':
                    e.preventDefault();
                    setRegisterFormIsOpen(!registerFormIsOpen);
                    setOpenMenu(false);
                    break;
                  default:
                    break;
                }
              }}
              key={id}
              to={link}
              className={` max-sm:my-2 inline-flex ml-2 justify-center hover:border-b underline-offset-4 border-mediumpurple px-4 max-sm:rounded-md md:rounded-sm max-sm:bg-pink max-sm:bg-opacity-5 overflow-hidden items-center  ${
                openMenu ? 'opacity-100' : 'max-sm:opacity-0'
              } font-squada text-lg ${
                name === 'ENTRAR' || name === 'Compra rápida'
                  ? 'text-orange hover:text-white'
                  : 'text-grayLight hover:text-white'
              } duration-100`}
            >
              {icon ? React.createElement(icon) : ''}
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
