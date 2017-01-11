import React from 'react';
import { Link } from 'react-router';
import SelmaHeader from './header/selma/selmaheader';
import Footer from './footer/footer';

const Selma = ({ children }) => (
  <div className="background">
    <section className="content">
      <SelmaHeader />
      {children}
    </section>
    <Footer />
  </div>
);

export default Selma;
