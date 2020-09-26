import { Box, Button } from "grommet";
import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Link, useParams } from "react-router-dom";
import { selectFeatures } from "../../store/feature/featureSelectors";
import { selectGroupByShortId } from "../../store/group/groupSelectors";
import { RootState } from "../../store/rootReducer";
import CardWall from "../../ui/card/CardWall";
import FeatureCard from "../../ui/card/FeatureCard";
import GroupHeader from "./components/GroupHeader";

const GroupPage: React.FC = () => {
  const features = useSelector(selectFeatures);
  const params = useParams<{ groupId: string }>();
  useFirestoreConnect({ collection: "group" });
  const group = useSelector((s: RootState) =>
    selectGroupByShortId(s, params.groupId)
  );
  useFirestoreConnect([
    {
      collection: "feature",
      where: ["default", "==", true],
    },
    {
      collection: "group",
      where: ["shortId", "==", params.groupId],
    },
  ]);

  if (!group) return null;

  return (
    <>
      <GroupHeader name={group?.name} />
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

export default GroupPage;
