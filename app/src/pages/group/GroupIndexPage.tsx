import { Box, Button } from "grommet";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectFeatures } from "../../store/feature/featureSelectors";
import CardWall from "../../ui/card/CardWall";
import FeatureCard from "../../ui/card/FeatureCard";

const GroupIndexPage: React.FC = () => {
  const features = useSelector(selectFeatures);
  const params = useParams<{ groupId: string }>();
  return (
    <>
      <Box justify="center" margin="small">
        <Link to={`/${params.groupId}/add`}>
          <Button
            alignSelf="center"
            size="medium"
            color="neutral-1"
            primary
            label="Add to the wall"
          />
        </Link>
      </Box>
      <CardWall>
        {features.map((f) => (
          <FeatureCard feature={f} />
        ))}
      </CardWall>
    </>
  );
};

export default GroupIndexPage;
