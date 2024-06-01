import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// componente onde se define as rotas, o que será carregado em cada rota e quais rotas são públicas ou privadas
import Candle from './pages/Candle';

function CustomRoute({ isPrivate, ...rest }) {

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Candle} />
    </Switch>
  );
}