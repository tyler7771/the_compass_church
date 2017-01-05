import React from 'react';
import { Link } from 'react-router';
// import YorktownHeaderContainer from './header/yorktown/yorktownheadercontainer';
import Footer from './footer/footer';

const Yorktown = ({ children }) => (
  <div className="background">
    <section className="content">

      {children}
    </section>
    <Footer />
  </div>
);

export default Yorktown;
