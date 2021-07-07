import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import MoviePage from './pages/MoviePage';

export default function App() {
  return (
    <div className="app__wrapper">
      <Router>
        <Route path='/' component={CardContainer} exact/>
        <Route
          path="/movie/:id"
          render={({ match }) => (
            <MoviePage id={match.params.id} />
          )}
        />
      </Router>
    </div>
  );
}
