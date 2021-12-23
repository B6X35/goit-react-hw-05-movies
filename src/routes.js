import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact patch="/">
          <HomePage title="Trending Today" />
        </Route>
      <Route exact patch="/movies">
        <p>Movie</p>
        {/* <SearchPage /> */}
      </Route>
    </Switch>
  );
};

export default Routes;
