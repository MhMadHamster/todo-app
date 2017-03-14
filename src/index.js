import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { saveState } from './localStorage';
import Store from './store';
import TodoContainer from './containers/todo';

Store.subscribe(() => {
  saveState(Store.getState());
});

render(
  <Provider store={Store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('app'),
);
