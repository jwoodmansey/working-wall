import { Card, CardBody, Heading } from "grommet";
import React from "react";
import { Link } from "react-router-dom";
import { Group } from "../../store/group/groupSelectors";

type Props = {
  group: Group;
};

const GroupCard: React.FC<Props> = ({ group }) => {
  return (
    <Card alignSelf="center" pad="small" hoverIndicator onClick={() => {}}>
      <Link to={`/${group.shortId}`}>
        <CardBody>
          <Heading level="4">{group.name}</Heading>
        </CardBody>
      </Link>
    </Card>
  );
};

export default GroupCard;
