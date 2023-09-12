/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const BgContext = createContext();

export function BgProvider({ children }) {
  const [blurBg, setBlurBg] = useState(false);

  return (
    <BgContext.Provider value={[blurBg, setBlurBg]}>
      {children}
    </BgContext.Provider>
  );
}
