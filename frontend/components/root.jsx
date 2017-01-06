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
          <Route path="/visit" component={Visit} />
        </Route>
        <Route path="/selma" component={Selma}>
          <IndexRoute component={SelmaHome}/>
        </Route>
        <Route path="/winchester" component={Winchester}>
          <IndexRoute component={WinchesterHome}/>
        </Route>
        <Route path="/yorktown" component={Yorktown}>
          <IndexRoute component={YorktownHome}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
