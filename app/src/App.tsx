/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Box, Button, Grommet, Heading, Nav } from "grommet";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { LinkPrevious } from "grommet-icons";
import GroupPage from "./pages/group/GroupPage";
import HomePage from "./pages/home/HomePage";
import { rrfProps, store } from "./store/config";
import FeaturePage from "./pages/feature/FeaturePage";
import AddPhrasePage from "./pages/add-phrase/AddPhrasePage";
import NavBar from "./ui/nav/NavBar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Grommet plain>
          <Router>
            <div className="App">
              <NavBar />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/:groupId/add">
                  <AddPhrasePage />
                </Route>
                <Route path="/:groupId/:featureId">
                  <FeaturePage />
                </Route>
                <Route path="/:groupId">
                  <GroupPage />
                </Route>
              </Switch>
            </div>
          </Router>
        </Grommet>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
