import React from 'react';

import Header from '../components/Header';

import './styles.css';
import { GlobalSoundProvider } from './GlobalSoundProvider';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalSoundProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </GlobalSoundProvider>
      </body>
    </html>
  );
}

export default RootLayout;
