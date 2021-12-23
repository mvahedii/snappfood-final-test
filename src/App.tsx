import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import store from './store';
import {HomePage, Vendors} from './pages';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vendors" element={<Vendors />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
