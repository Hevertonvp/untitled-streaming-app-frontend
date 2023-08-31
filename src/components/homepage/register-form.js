/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
import axios from '../../api/axios';
import { IoClose } from 'react-icons/io5';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const REGISTER_BY_EMAIL_URL = '/api/v1/users/signUp/';
const REGISTER_BY_TOKEN_URL = '/api/v1/users/guestLogin/';

function RegisterForm({ registerFormIsOpen, setRegisterFormIsOpen }) {
  const errRef = useRef();
  const emailRef = useRef();

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [passToken, setPassToken] = useState('');

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);

    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    setErrMsg('');
  }, [email]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_BY_EMAIL_URL,
        JSON.stringify({ email }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
        setSuccess(true),
      );
    } catch (error) {
      if (!error?.response) {
        setErrMsg(error);
      }
    }
  };

  const handleTokenSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        REGISTER_BY_TOKEN_URL,
        JSON.stringify({ passToken }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
    } catch (error) {
      if (!error.response?.data.message) {
        setErrMsg('ocorreu um erro para realizar o login');
      }
      setErrMsg(error.response?.data.message);
    }
  };

  return (
    <section
      className={`${
        registerFormIsOpen
          ? 'opacity-100  h-auto'
          : 'opacity-0 h-0 pointer-events-none'
      } w-full pt-20 flex justify-center transition-opacity duration-75 ease-in-out`}
    >
      <section className=" fixed mt-10  font-squada shadow-sm shadow-black pt-5 rounded-lg text-grayLight md:w-5/12 z-50 p-10 bg-grayDark text-center max-sm:w-10/12">
        {success ? (
          <form
            onSubmit={handleTokenSubmit}
            className="flex flex-col space-y-5"
          >
            <IoClose
              className="self-end"
              onClick={() => setRegisterFormIsOpen(!registerFormIsOpen)}
            />
            <div className="text-center space-y-2 text-white">
              <h1 className="text-orange">Email enviado com sucesso!</h1>
              <p>
                Por favor, insira o token que foi enviado para email EMAILAQUI e
                clique em enviar para fazer login
              </p>
            </div>
            <input
              onChange={(e) => {
                setPassToken(e.target.value);
              }}
              type="password"
              id="password"
              autoComplete="off"
              className="shadow-sm w-2/4 self-center bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:grayLight focus:border-blue-500 block p-2.5 "
              required
            />
            <p className="">{errMsg ? errMsg : ''}</p>
            <button
              type="submit"
              className="text-black self-center bg-grayLight hover:bg-gray focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Enviar
            </button>
          </form>
        ) : (
          <form onSubmit={handleEmailSubmit} className="">
            <div className="text-white flex justify-end">
              <IoClose
                onClick={() => setRegisterFormIsOpen(!registerFormIsOpen)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-grayLight text-2xl "
              >
                Digite seu Email
              </label>
              <p className="text-darkorange">Importante!</p> Seus códigos
              adquiridos serão enviados para o email informado
              <p
                ref={errRef}
                className={`${
                  emailFocus && email && !validEmail
                    ? 'text-darkorange'
                    : 'invisible'
                }`}
              >
                Por favor, insira um email valido
              </p>
              <input
                ref={emailRef}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="off"
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 w-full border border-gray-300 text-black text-sm rounded-lg focus:grayLight focus:border-blue-500 block p-2.5"
                placeholder="name@provedor.com"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                required
              />
            </div>

            <button
              type="submit"
              className={`text-black bg-grayLight hover:bg-gray focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            >
              Enviar
            </button>
          </form>
        )}
      </section>
    </section>
  );
}

export default RegisterForm;
