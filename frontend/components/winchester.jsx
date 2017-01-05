import React from 'react';
import { Link } from 'react-router';
// import WinchesterHeaderContainer from './header/winchester/winchesterheadercontainer';
import Footer from './footer/footer';

const Winchester = ({ children }) => (
  <div className="background">
    <section className="content">

      {children}
    </section>
    <Footer />
  </div>
);

export default Winchester;
