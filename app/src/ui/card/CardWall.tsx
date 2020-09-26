import { Box } from "grommet";
import React from "react";
import Masonry from "react-masonry-component";

const CardWall: React.FC = ({ children }) => {
  return (
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
        {children}
      </Masonry>
    </Box>
  );
};

export default CardWall;
