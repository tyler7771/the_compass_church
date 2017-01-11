import React from 'react';
import { Link } from 'react-router';
import WinchesterHeader from './header/winchester/winchesterheader';
import Footer from './footer/footer';

const Winchester = ({ children }) => (
  <div className="background">
    <section className="content">
      <WinchesterHeader />
      {children}
    </section>
    <Footer />
  </div>
);

export default Winchester;
