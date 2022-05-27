import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";

import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
import { ModalProvider } from "./context/Modal";

const reactContainer = document.getElementById("root");
const root = createRoot(reactContainer);

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <ReduxProvider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </ReduxProvider>
  );
}

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
