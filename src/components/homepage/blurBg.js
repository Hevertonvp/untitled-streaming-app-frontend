/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { BgContext } from '../../context/blurBgContext';

function BlurBg({ children }) {
  const context = useContext(BgContext);
  const [blurBg] = context;
  return (
    <div
      className={`
    pt-20
    ${blurBg && 'blur-sm bg-grayDark bg-opacity-25 pointer-events-none'}`}
    >
      {children}
    </div>
  );
}

export default BlurBg;
