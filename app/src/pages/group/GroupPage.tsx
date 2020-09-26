import { Box, Button, Text } from "grommet";
import React from "react";
import Masonry from "react-masonry-component";
import FeatureCard from "../../ui/card/FeatureCard";
import GroupHeader from "./components/GroupHeader";

const GroupPage: React.FC = () => {
  const features = [
    {
      name: "Similies",
      color: "#3D138D",
    },
    {
      name: "Preposition",
      color: "#A2423D",
    },
    {
      name: "Personification",
      color: "#FFCA58",
    },
    {
      name: "Alliteration",
      color: "#81FCED",
    },
    {
      name: "Metaphors",
      color: "#FD6FFF",
    },
    {
      name: "Conjunctions",
      color: "#6FFFB0",
    },
  ];

  return (
    <>
      <GroupHeader />
      <Box justify="center" margin="small">
        <Button
          alignSelf="center"
          size="large"
          color="neutral-1"
          primary
          label="Add to the wall"
        />
      </Box>
      <Box justify="center" alignSelf="center">
        <Masonry
          className="my-gallery-class" // default ''
          elementType="div" // default 'div'
          options={{ fitWidth: true, transitionDuration: 0 }}
          style={{ margin: "0 auto" }}
          disableImagesLoaded // default false
          enableResizableChildren
          updateOnEachImageLoad // default false and works only if disableImagesLoaded is false
        >
          {features.map((f) => (
            <FeatureCard title={f.name} color={f.color} />
          ))}
        </Masonry>
      </Box>
    </>
  );
};

export default GroupPage;
