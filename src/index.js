import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </BrowserRouter>
);
