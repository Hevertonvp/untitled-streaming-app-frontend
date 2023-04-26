import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ImHome,
  ImStatsBars,
  ImMenu,
  ImUser,
  ImUserCheck,
  ImCoinDollar,
  ImBook,
  ImExit,
} from 'react-icons/im';

function Sidebar() {
  const menuItems = [
    {
      name: 'Home',
      url: '/',
      icon: ImHome,
    },
    {
      name: 'Nova Venda',
      url: '/',
      icon: ImCoinDollar,
    },
    {
      name: 'Clientes ativos',
      url: '/',
      icon: ImUserCheck,
    },
    {
      name: 'Histórico de vendas',
      url: '/',
      icon: ImBook,
    },
  ];

  const [open, setOpen] = useState(true);
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`${
        isDark ? 'bg-dark-theme-bg' : 'bg-white'
      } h-screen font-source relative w-full flex justify-between`}
    >
      <div
        className={`h-screen ${open ? 'w-2/6 max-sm:w-full' : 'w-5'} pt-15  ${
          isDark ? 'bg-blue' : 'bg-graylight'
        } overflow-hidden flex flex-col justify-between  shadow-lg shadow-black  duration-300`}
      >
        <button
          onClick={() => setOpen(!open)}
          className={`${open ? '' : 'rotate-90'} self-end mt-4  mr-1 duration-75
          ${isDark ? '' : ''}
          `}
        >
          <ImMenu />
        </button>
        <ul
          className={`${
            open
              ? 'opacity-100 duration-500'
              : 'opacity-0 duration-75 pointer-events-none'
          }`}
        >
          <h1
            className={`${
              isDark ? 'text-softpurple' : ' text-mediumpurple'
            } m-3 font-pacifico`}
          >
            Painel
          </h1>

          {menuItems.map((item, i) => {
            return (
              <li key={i} className="flex items-center mt-1 px-2">
                <Link
                  to={item.url}
                  className={`flex items-center p-7  duration-150 rounded-md ${
                    isDark
                      ? 'bg-gray-dark hover:bg-dark-theme-bg text-white'
                      : 'bg-gray hover:bg-gray-dark text-black'
                  }  w-full`}
                >
                  <span className="mr-2">{React.createElement(item.icon)}</span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className={`bg-gray-dark border-2 border-softpurple mb-20 w-20 items-center flex rounded-lg h-7 ml-11 px-1`}
        >
          <button
            onClick={() => setIsDark(!isDark)}
            className={`bg-gray rounded-full w-6 h-6 ${
              isDark && 'translate-x-12'
            } duration-300 `}
          ></button>
        </div>
      </div>
      <div className={` flex p-10 text-2xl space-x-3 z-50`}>
        <Link>
          <ImUser className="hover:text-gray duration-75" />
        </Link>
        <Link>
          <ImExit className="hover:text-gray duration-75" />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
