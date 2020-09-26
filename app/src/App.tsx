import React from "react";
import { Button, Grommet, Header, Heading, Box, Nav, Text } from "grommet";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FeatureCard from "./ui/card/FeatureCard";
import GroupPage from "./pages/group/GroupPage";
import HomePage from "./pages/home/HomePage";

const App: React.FC = () => {
  return (
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
            <Route path="/:id">
              <GroupPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Grommet>
  );
};

export default App;
