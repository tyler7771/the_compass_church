import React from 'react';
import { Link } from 'react-router';
import HomeHeader from './header/home/header';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="app">
    <section className="content">
      <HomeHeader />
      {children}
    </section>
    <Footer />
  </div>
);

export default App;
