import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import GlobalStyle from './globalStyle';

// componente principal da aplicação

function App() {

  return (
      <>
      <GlobalStyle/>
      <Router history={history}>
        <Routes />
      </Router>
      </>
        );
}

export default App;
