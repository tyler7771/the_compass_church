import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home/homecontainer';
import Visit from './visit/visit';
import Staff from './staff/main_staff';
import SelmaVisit from './visit/selmavisit';
import WinchesterVisit from './visit/winchestervisit';
import YorktownVisit from './visit/yorktownvisit';
import Mission from './mission/mission';
import Youth from './youth/youth';
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
          <Route path="/selma" component={SelmaVisit} />
          <Route path="/winchester" component={WinchesterVisit} />
          <Route path="/yorktown" component={YorktownVisit} />
          <Route path="/staff" component={Staff} />
          <Route path="/mission" component={Mission} />
          <Route path="/youth" component={Youth} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
