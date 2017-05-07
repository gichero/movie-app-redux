import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducer from './MovieWidget.reducer';
import MovieWidgetContainer from './MovieWidget.container';

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), Redux.applyMiddleware(ReduxThunk));

ReactDOM.render(
  <ReactRedux.Provider store={store}>
      <MovieWidgetContainer/>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
