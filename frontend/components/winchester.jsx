import React from 'react';
import { Link } from 'react-router';
import WinchesterHeaderContainer from './header/winchester/winchesterheadercontainer';

const Winchester = ({ children }) => (
  <div className="background">
    <WinchesterHeaderContainer />
    {children}
  </div>
);

export default Winchester;
