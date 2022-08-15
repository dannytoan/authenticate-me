import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/index";
import Photos from "./components/Photos";
import Splash from "./components/Splash";
import PhotoDetail from "./components/Photos/PhotoDetail";
import Collections from "./components/Collections";
import CollectionDetail from "./components/Collections/CollectionDetail";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
            <Route exact path="/">
              <Splash />
            </Route>
        {isLoaded && (
          <Switch>
            <Route exact path="/photos">
            <Navigation isLoaded={isLoaded} />
              <Photos />
            </Route>
            <Route exact path="/photos/:id">
            <Navigation isLoaded={isLoaded} />
              <PhotoDetail />
            </Route>
            <Route exact path="/collections">
            <Navigation isLoaded={isLoaded} />
              <Collections />
            </Route>
            <Route exact path="/collections/:id">
              <CollectionDetail />
            </Route>
          </Switch>
        )}
      </>
    )
  );
}

export default App;
