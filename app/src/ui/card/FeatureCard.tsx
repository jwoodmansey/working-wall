import { Card, CardBody } from "grommet";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Feature } from "../../store/feature/featureSelectors";

type Props = {
  feature: Feature;
};

const FeatureCard: React.FC<Props> = ({ feature }) => {
  const params = useParams<{ groupId: string }>();
  return (
    <Card
      background={feature.color}
      width="small"
      hoverIndicator
      focusIndicator
      margin="small"
      onClick={() => {}}
      animation="fadeIn"
    >
      <Link to={`/${params.groupId}/${feature.shortId}`}>
        <CardBody pad="medium" hoverIndicator>
          {feature.name}
        </CardBody>
      </Link>
    </Card>
  );
};

export default FeatureCard;
