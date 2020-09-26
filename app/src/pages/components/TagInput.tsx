import { Box, Button } from "grommet";
import { Checkmark } from "grommet-icons";
import React from "react";
import { Feature } from "../../store/feature/featureSelectors";

type Props = {
  features: Feature[];
  selectedFeatures: Feature[];
  onSelectFeature: (f: Feature) => void;
};

const TagInput: React.FC<Props> = ({
  features,
  selectedFeatures,
  onSelectFeature,
}) => {
  return (
    <Box wrap direction="row">
      {features.map((f) => {
        const isSelected = selectedFeatures.find(
          (sf) => sf.shortId === f.shortId
        );
        const onClick = () => onSelectFeature(f);
        return (
          <Button
            margin="xsmall"
            key={f.shortId}
            color={isSelected ? "accent-1" : "brand"}
            size="small"
            onClick={onClick}
            icon={
              isSelected ? (
                <Checkmark size="small" color="accent-1" />
              ) : undefined
            }
            alignSelf="start"
            label={f.name}
          />
        );
      })}
    </Box>
  );
};

export default TagInput;
