import { Heading } from "grommet";
import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useParams } from "react-router-dom";
import { selectFeatureByShortId } from "../../store/feature/featureSelectors";
import { selectPhrasesByFeatureId } from "../../store/phrase/phraseSelectors";
import { RootState } from "../../store/rootReducer";
import GroupHeader from "../group/components/GroupHeader";

const FeaturePage: React.FC = () => {
  const params = useParams<{ groupId: string; featureId: string }>();
  useFirestoreConnect([
    {
      collection: "feature",
    },
    {
      collection: "phrase",
      where: ["selectedFeatures", "array-contains", params.featureId],
    },
  ]);
  const feature = useSelector((s: RootState) =>
    selectFeatureByShortId(s, params)
  );
  const phrases = useSelector((s: RootState) =>
    selectPhrasesByFeatureId(s, params)
  );
  if (!feature) return null;

  return (
    <>
      <GroupHeader name={feature?.name} />
      <Heading>{JSON.stringify(phrases)}</Heading>
    </>
  );
};

export default FeaturePage;
