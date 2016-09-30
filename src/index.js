import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import App from './components/App';
import PhotoItem from './components/PhotoItem';
import PhotoGrid from './components/PhotoGrid';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={PhotoItem}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
