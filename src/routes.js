import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
          <HomePage title="Trending Today" />
        </Route>
      <Route exact path="/movies">
        <SearchPage />
      </Route>
      <Route path="/movies/:id">
        <MoviePage />
      </Route>
    </Switch>
  );
};

export default Routes;
