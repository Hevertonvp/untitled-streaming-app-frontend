import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLogInOutline } from 'react-icons/io5';
import { HiOutlineViewList } from 'react-icons/hi';
function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    {
      name: 'Seja um revendedor',
      link: '/',
      component: 'span',
    },
    {
      name: 'Compra rápida',
      link: '/',
      component: 'span',
    },
    {
      name: 'Contato',
      link: '/',
      component: 'span',
    },
    {
      name: 'ENTRAR',
      link: '/',
      component: IoLogInOutline,
    },
  ];

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
        isScrolled || open
          ? 'bg-darkpurple md:bg-opacity-90  max-sm:bg-opacity-100'
          : ''
      }
       w-full
      fixed

      overflow-hidden
      duration-300
      max-sm:border-b-2
      transition-all
      items-center ${open ? 'h-80' : 'h-20'} duration-200 md:h-20`}
    >
      <div
        className={`max-w-screen-xl flex flex-col md:flex-row max-md:flex-wrap justify-between mx-auto p-5`}
      >
        <div className="flex mb-10 items-center justify-between">
          <div className="flex ">
            <img src=".././images/logo.png" alt="" className="h-10" />
            <h1 className="font-pacifico drop-shadow-md  text-lg mt-2 ml-0 text-softpurple">
              Painel
            </h1>
          </div>
          <button className="ml-40">
            <HiOutlineViewList
              onClick={() => {
                setOpen(!open);
              }}
              className="md:hidden text-white text-3xl mt-4"
            />
          </button>
        </div>
        {navLinks.map((item, id) => {
          return (
            <Link
              key={id}
              to={item?.link}
              className={` my-2 overflow-hidden items-center text-center ${
                open ? 'opacity-100' : 'max-sm:opacity-0'
              } font-squada text-lg ${
                item.name === 'ENTRAR'
                  ? 'text-yellow max-sm:mt-10'
                  : 'text-graylight hover:text-white '
              } duration-200`}
            >
              <span className="flex ml-2 justify-center hover:border-b-2 border-mediumpurple px-4 max-sm:rounded-md md:rounded-sm max-sm:bg-pink max-sm:bg-opacity-5">
                {React.createElement(item?.component, {
                  size: '20',
                  top: '2px',
                })}
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
