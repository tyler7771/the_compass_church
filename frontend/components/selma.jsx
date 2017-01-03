import React from 'react';
import { Link } from 'react-router';
import SelmaHeaderContainer from './header/selma/selmaheadercontainer';

const Selma = ({ children }) => (
  <div className="background">
    <SelmaHeaderContainer />
    {children}
  </div>
);

export default Selma;
