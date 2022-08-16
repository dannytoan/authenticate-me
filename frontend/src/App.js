import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/index";
import Photos from "./components/Photos";
import Splash from "./components/Splash";
import PhotoDetail from "./components/Photos/PhotoDetail";
import Collections from "./components/Collections";
import CollectionDetail from "./components/Collections/CollectionDetail";
import { getComments } from "./store/comments";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
      await dispatch(getComments())
      setIsLoaded(true);
    })();
  }, [dispatch]);

  return (
    isLoaded && (
      <>
            <Route exact path="/">
              <Splash />
            </Route>
        {isLoaded && (
          <Switch>
            <ProtectedRoute exact path="/photos">
            <Navigation isLoaded={isLoaded} />
              <Photos />
            </ProtectedRoute>
            <ProtectedRoute exact path="/photos/:id">
            <Navigation isLoaded={isLoaded} />
              <PhotoDetail />
            </ProtectedRoute>
            <ProtectedRoute exact path="/collections">
            <Navigation isLoaded={isLoaded} />
              <Collections />
            </ProtectedRoute>
            <ProtectedRoute exact path="/collections/:id">
            <Navigation isLoaded={isLoaded} />
              <CollectionDetail />
            </ProtectedRoute>
          </Switch>
        )}
      </>
    )
  );
}

export default App;
