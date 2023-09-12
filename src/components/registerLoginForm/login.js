/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { BgContext } from '../../context/blurBgContext';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import { IoClose } from 'react-icons/io5';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASS_REGEX = /^.{8,}$/;

const SIGN_IN_URL = '/register';
const URL = '/api/v1/users/login/';

function Login({ loginFormIsOpen, setLoginFormIsOpen }) {
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

  const authContext = useContext(AuthContext);
  const [handleAuthForm, formIsOpen] = authContext;
  const bgContext = useContext(BgContext);
  const [blurBg, setBlurBg] = bgContext;

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
      console.log({ email: email, password: pass });
      const response = await axios.post(
        URL,
        JSON.stringify({ email: email, password: pass }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
        setSuccess(true),
      );
    } catch (error) {
      if (error.response.data.message) {
        console.log(error.response.data.message);
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
        formIsOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0 pointer-events-none'
      }
      w-full flex justify-center transition-all duration-200 ease-in-out`}
    >
      <form
        onSubmit={handleOnSubmit}
        className="fixed md:mt-60 max-sm:mt-24 items-center font-squada border-2 border-gray shadow-2xl shadow-orangeIndexBg rounded-lg text-grayLight md:w-4/12 z-50 p-5 bg-darkTheme text-center max-sm:w-10/12"
      >
        <div className="flex justify-end ">
          <button className="text-2xl hover:text-white pb-5">
            <IoClose
              onClick={() => {
                setBlurBg(!blurBg);
                handleAuthForm();
              }}
            />
          </button>
        </div>
        <div className="p-7">
          <div className="mb-4">
            <label htmlFor="email" className="block text-grayLight ">
              Email
            </label>
            {emailFocus && email && !validEmail && (
              <span>
                <p className="text-sm text-orange">
                  Por favor insira um email válido
                </p>
              </span>
            )}
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
          <div className="mb-4">
            <label htmlFor="password" className="block  text-grayLight ">
              Senha
            </label>
            {passFocus && !validPass && (
              <span>
                <p className="text-sm text-orange">Mínimo 8 caracteres</p>
              </span>
            )}
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
          <div className="mb-4">
            <label htmlFor="repeat-password" className="block  text-grayLight ">
              Confirme sua senha
            </label>
            {!validMatch && matchFocus && (
              <p className="text-orange text-sm">As senhas não são iguais</p>
            )}
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
                <a href="#" className="text-orangeCardBg  hover:underline ">
                  termos e condições
                </a>
              </label>
              <p htmlFor="sign in" className="text-orange pt-3">
                Não possui cadastro?{' '}
                <span>
                  <Link
                    to={'/register'}
                    onClick={() => setIsRegistered(false)}
                    className="hover:underline text-orangeCardBg "
                  >
                    Clique aqui
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="text-black  bg-grayLight hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Entrar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
