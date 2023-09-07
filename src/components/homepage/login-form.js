/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import { IoClose } from 'react-icons/io5';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASS_REGEX = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z0-9]).{8,}$/;

const SIGN_IN_URL = '/register';
const URL = '/api/v1/users/signUp/';

function LoginForm({ loginFormIsOpen, setLoginFormIsOpen }) {
  const errRef = useRef();
  const emailRef = useRef();

  const [isRegistered, setIsRegistered] = useState(true);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pass, setPass] = useState('');
  const [passFocus, setPassFocus] = useState(false);
  const [validPass, setValidPass] = useState(false);

  const [matchPass, setMatchPass] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PASS_REGEX.test(pass);
    const match = pass === matchPass;
    setValidPass(result);
    setValidMatch(match);
  }, [pass, matchPass]);

  useEffect(() => {
    setErrMsg('');
  }, [email, pass, matchPass]);

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        URL,
        JSON.stringify({ email }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
        setSuccess(true),
      );
    } catch (error) {
      if (error.response.data.message) {
        setErrMsg(error.response.data.message);
      } else
        setErrMsg(
          'Ocorreu um erro insperado. Contate o administrador do sistema.',
        );
    }
  }

  return (
    <section
      className={`${
        loginFormIsOpen
          ? 'opacity-100 h-auto max-sm:pt-20 '
          : 'opacity-0 h-0 pointer-events-none'
      } w-full flex justify-center  transition-opacity duration-75 ease-in-out`}
    >
      {isRegistered ? (
        <form className=" fixed md:mt-40 items-center font-squada shadow-sm shadow-black pt-5 rounded-lg text-grayLight md:w-5/12 z-50 p-10 bg-grayDark text-center max-sm:w-10/12">
          <div className="text-white flex justify-end">
            <IoClose onClick={() => setLoginFormIsOpen(!loginFormIsOpen)} />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-grayLight ">
              Email
            </label>
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
              id="login-email"
              className="shadow-sm bg-gray-50 w-full border border-gray-300 text-black text-sm rounded-lg focus:grayLight focus:border-blue-500 block p-2.5"
              placeholder="name@provedor.com"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              required
            />
          </div>
          <div className="">
            <label htmlFor="password" className="block  text-grayLight ">
              Senha
            </label>
            <p
              className={`${
                passFocus && !validPass ? 'text-darkorange' : 'invisible'
              }`}
            >
              Mínimo 8 caracteres, ao menos um caractere especial (ex: @, #, $)
            </p>
            <input
              type="password"
              id="password"
              autoComplete="off"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:grayLight focus:border-blue-500 block w-full p-2.5 "
              required
              onFocus={() => setPassFocus(true)}
              onBlur={() => setPassFocus(false)}
            />
          </div>
          <div className="">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-grayLight "
            >
              Confirme sua senha
            </label>
            <p
              className={`${
                !validMatch && matchFocus ? 'text-darkorange' : 'invisible'
              }`}
            >
              As senhas não são iguais
            </p>
            <input
              type="password"
              id="repeat-password"
              onChange={(e) => setMatchPass(e.target.value)}
              value={matchPass}
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:grayLight focus:border-blue-500 block w-full p-2.5"
              required
              autoComplete="off"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
          </div>

          <div className="flex justify-center pt-2 mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:bg-dark-blue"
                required
              />
            </div>
            <div className="flex flex-col  justify-center">
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium  text-grayLight "
              >
                Eu concordo com os{' '}
                <a href="#" className="text-white  hover:underline ">
                  termos e condições
                </a>
              </label>
              <p htmlFor="sign in" className="text-orange pt-3">
                Não possui cadastro?{' '}
                <span>
                  <Link
                    onClick={() => setIsRegistered(false)}
                    href="/"
                    className="hover:underline"
                  >
                    Clique aqui
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="text-black  bg-grayLight hover:bg-gray focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Entrar
          </button>
        </form>
      ) : (
        <form
          onSubmit={() => handleOnSubmit(event)}
          className=" fixed md:mt-40 items-center font-squada shadow-sm shadow-black pt-5 rounded-lg text-grayLight md:w-5/12 z-50 p-10 bg-grayDark text-center max-sm:w-10/12"
        >
          <div className="text-white flex justify-end">
            <IoClose
              onClick={() => {
                setLoginFormIsOpen(!loginFormIsOpen);
                setIsRegistered(true);
              }}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white ">
              Por favor, insira seu email:
            </label>
            <div className="text-darkorange text-sm mt-5">
              {errMsg && (
                <p className="text-darkorange text-sm">
                  {errMsg}. Esqueceu seu email ou senha?{' '}
                  <Link className="text-white">Clique aqui</Link>
                </p>
              )}
            </div>
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
              id="login-email"
              className="shadow-sm bg-gray-50 w-full border border-gray-300 text-black text-sm rounded-lg focus:grayLight focus:border-blue-500 block p-2.5"
              placeholder="name@provedor.com"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              required
            />
          </div>
          <button
            type="submit"
            className="text-black  bg-grayLight hover:bg-gray focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Enviar
          </button>
        </form>
      )}
    </section>
  );
}

export default LoginForm;
