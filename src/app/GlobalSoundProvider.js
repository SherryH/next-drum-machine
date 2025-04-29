'use client';
import React from 'react';

const GlobalSoundContext = React.createContext({});

export const GlobalSoundProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const toggleSound = () => {
    setSoundEnabled((soundEnabled) => !soundEnabled);
  };
  return (
    <GlobalSoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </GlobalSoundContext.Provider>
  );
};

export const useGlobalSound = () => {
  const { soundEnabled, toggleSound } = React.useContext(GlobalSoundContext);
  return { soundEnabled, toggleSound };
};
