import { Card, CardBody } from "grommet";
import React from "react";

type Props = {
  title: string;
  color?: string;
};

const FeatureCard: React.FC<Props> = ({ title, color }) => {
  return (
    <Card
      background={color}
      width="small"
      hoverIndicator
      focusIndicator
      margin="small"
      onClick={() => alert("test")}
    >
      <CardBody pad="medium" hoverIndicator>
        {title}
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
