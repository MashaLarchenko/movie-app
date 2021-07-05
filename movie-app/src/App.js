import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardContainer from './pages/MoviePage';
import MoviePage from './pages/MoviePage';

export default function App() {
  return (
    <div className="app__wrapper">
      <Switch>
        <Route path="/" exact>
          <CardContainer />
        </Route>
        <Route
          path="/movie/:id"
          render={({ match }) => (
            <MoviePage id={match.params.id} />
          )}
        />
      </Switch>
    </div>
  );
}
