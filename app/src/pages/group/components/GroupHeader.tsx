import { Header, Heading } from "grommet";
import React from "react";

type Props = {
  name: string;
};

const GroupHeader: React.FC<Props> = ({ name }) => {
  return (
    <Header background="neutral-2" justify="center">
      <Heading margin="xsmall" level="4">
        {name}
      </Heading>
    </Header>
  );
};

export default GroupHeader;
