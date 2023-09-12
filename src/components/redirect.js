import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect() {
  const navigate = useNavigate();
  const timeout = useRef(0);
  const [time, setTime] = useState(3);

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 2000);
    if (time <= 0) {
      navigate('/dashboard');
    }
    return () => {
      clearTimeout(timeout.current);
    };
  });

  return { time };
}

export default Redirect;
