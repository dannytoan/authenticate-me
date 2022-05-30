import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignUpFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

import Photos from "./components/Photos";
import CreateALook from "./components/Photos/CreateALook";
import Splash from "./components/Splash";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <Splash />
            </Route>
            <Route path="/signup">
              <SignUpFormPage />
            </Route>
            <Route exact path="/photos">
              <Photos />
            </Route>
            <Route path="/photos/new">
              <CreateALook />
            </Route>
            <Route>
              Page Not Found
            </Route>
          </Switch>
        )}
      </>
    )
  );
}

export default App;
