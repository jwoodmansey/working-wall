import React from "react";
import { Button, Grommet, Header, Heading, Box, Nav } from "grommet";
import "./App.css";
import Masonry from "react-masonry-component";
import FeatureCard from "./ui/card/FeatureCard";

const App: React.FC = () => {
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
    <Grommet plain>
      <div className="App">
        <Nav background="brand" flex direction="row" justify="center">
          <Heading margin="small" level="3">
            Working Wall on the Web
          </Heading>
        </Nav>
        <Header background="neutral-2" justify="center">
          <Heading margin="xsmall" level="4">
            5H - Miss Holdsworth
          </Heading>
        </Header>
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
      </div>
    </Grommet>
  );
};

export default App;
