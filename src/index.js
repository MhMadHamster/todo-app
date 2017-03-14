import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Store from './store';
import TodoContainer from './containers/todo';

render(
  <Provider store={Store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('app'),
);
