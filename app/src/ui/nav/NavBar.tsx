import { Button, Heading, Nav } from "grommet";
import { LinkPrevious } from "grommet-icons";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const history = useHistory();
  const route = useLocation();
  return (
    <Nav background="brand" flex direction="row">
      {route.pathname !== "/" && (
        <Button
          onClick={() => history.goBack()}
          focusIndicator
          hoverIndicator
          size="small"
          icon={<LinkPrevious />}
        />
      )}
      <Heading margin="medium" alignSelf="center" textAlign="center" level="3">
        Working Wall on the Web
      </Heading>
    </Nav>
  );
};

export default NavBar;
