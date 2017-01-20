import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home/home';
import SelmaHome from './home/selma';
import WinchesterHome from './home/winchester';
import YorktownHome from './home/yorktown';
import Selma from './selma';
import Winchester from './winchester';
import Yorktown from './yorktown';
import Visit from './visit/visit';
import Staff from './staff/main_staff';
import SelmaVisit from './visit/selmavisit';
import WinchesterVisit from './visit/winchestervisit';
import YorktownVisit from './visit/yorktownvisit';
import Mission from './mission/mission';
import Login from './login/login_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/welcome');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>

        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/visit" component={Visit} />
          <Route path="/staff" component={Staff} />
          <Route path="/mission" component={Mission} />
        </Route>
        <Route path="/selma" component={Selma}>
          <IndexRoute component={SelmaHome}/>
          < Route path="/selma/visit" component={SelmaVisit} />
        </Route>
        <Route path="/winchester" component={Winchester}>
          <IndexRoute component={WinchesterHome}/>
          < Route path="/winchester/visit" component={WinchesterVisit} />
        </Route>
        <Route path="/yorktown" component={Yorktown}>
          <IndexRoute component={YorktownHome}/>
          < Route path="/yorktown/visit" component={YorktownVisit} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
