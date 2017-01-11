import React from 'react';
import { Link } from 'react-router';
import YorktownHeader from './header/yorktown/yorktownheader';
import Footer from './footer/footer';

const Yorktown = ({ children }) => (
  <div className="background">
    <section className="content">
      <YorktownHeader />
      {children}
    </section>
    <Footer />
  </div>
);

export default Yorktown;
