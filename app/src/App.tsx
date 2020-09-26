/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Grommet, Heading, Nav } from "grommet";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import GroupPage from "./pages/group/GroupPage";
import HomePage from "./pages/home/HomePage";
import { rrfProps, store } from "./store/config";
import FeaturePage from "./pages/feature/FeaturePage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Grommet plain>
          <div className="App">
            <Nav background="brand" flex direction="row" justify="center">
              <Heading margin="small" level="3">
                Working Wall on the Web
              </Heading>
            </Nav>
            <Router>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/:groupId/:featureId">
                  <FeaturePage />
                </Route>
                <Route path="/:groupId">
                  <GroupPage />
                </Route>
              </Switch>
            </Router>
          </div>
        </Grommet>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
