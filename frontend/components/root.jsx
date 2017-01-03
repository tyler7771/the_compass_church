import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import Home from './home/home';
// import Selma from './selma';
// import Winchester from './winchester';
// import Yorktown from './yorktown';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/welcome');
    }
  };

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
        </Route>

      </Router>
    </Provider>
  );
};

export default Root;
