import React from 'react';
import { Link } from 'react-router';
// import SelmaHeaderContainer from './header/selma/selmaheadercontainer';
import Footer from './footer/footer';

const Selma = ({ children }) => (
  <div className="background">
    <section className="content">

      {children}
    </section>
    <Footer />
  </div>
);

export default Selma;
