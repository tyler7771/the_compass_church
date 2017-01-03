import React from 'react';
import { Link } from 'react-router';
import YorktownHeaderContainer from './header/yorktown/yorktownheadercontainer';

const Yorktown = ({ children }) => (
  <div className="background">
    <YorktownHeaderContainer />
    {children}
  </div>
);

export default Yorktown;
