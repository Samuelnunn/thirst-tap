import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import BeerSelection from './components/BeerSelection';
import WineSelection from './components/WineSelection';
import CocktailSelection from './components/CocktailSelection';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { getBeers, getWines, getCocktails } from './store/drinks';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    //these can go in the actual components, we dont need to mount info on home load
    dispatch(getBeers());
    dispatch(getWines());
    dispatch(getCocktails());
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/beer">
            <BeerSelection />
          </Route>
          <Route path="/wine">
            <WineSelection />
          </Route>
          <Route path="/cocktail">
            <CocktailSelection />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
