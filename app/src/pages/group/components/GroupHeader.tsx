import { Header, Heading } from "grommet";
import React from "react";

type Props = {
  name: string;
  description?: string;
  backgroundColor?: string;
};

const GroupHeader: React.FC<Props> = ({
  name,
  description,
  backgroundColor = "neutral-2",
}) => {
  return (
    <Header direction="column" background={backgroundColor} justify="center">
      <Heading margin="xsmall" level="4">
        {name} {description ? ` - ${description}` : ""}
      </Heading>
    </Header>
  );
};

export default GroupHeader;
