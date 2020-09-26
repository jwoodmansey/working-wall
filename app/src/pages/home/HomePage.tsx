import { Box, Heading } from "grommet";
import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { selectAllGroups } from "../../store/group/groupSelectors";
import GroupCard from "./GroupCard";

const HomePage: React.FC = () => {
  useFirestoreConnect({ collection: "group" });
  const groups = useSelector(selectAllGroups);
  return (
    <Box>
      <Heading alignSelf="center">Welcome</Heading>
      {groups.map((g) => (
        <GroupCard key={g.shortId} group={g} />
      ))}
    </Box>
  );
};

export default HomePage;
