import React from "react";
import { useSelector } from "react-redux";
import {
  ReduxFirestoreQuerySetting,
  useFirestoreConnect,
} from "react-redux-firebase";
import { useParams } from "react-router-dom";
import { selectFeatureByShortId } from "../../store/feature/featureSelectors";
import { selectPhrasesByFeatureId } from "../../store/phrase/phraseSelectors";
import { RootState } from "../../store/rootReducer";
import CardWall from "../../ui/card/CardWall";
import GroupHeader from "../group/components/GroupHeader";
import PhraseCard from "./components/PhraseCard";

const FeaturePage: React.FC = () => {
  const params = useParams<{ groupId: string; featureId: string }>();
  const feature = useSelector((s: RootState) =>
    selectFeatureByShortId(s, params)
  );
  useFirestoreConnect([
    {
      collection: "feature",
    },
    ...(feature
      ? [
          {
            collection: "phrase",
            where: [
              ["selectedFeatures", "array-contains", feature.id],
              ["approved", "==", true],
            ],
          } as ReduxFirestoreQuerySetting,
        ]
      : []),
  ]);

  const phrases = useSelector((s: RootState) =>
    selectPhrasesByFeatureId(s, params)
  );
  if (!feature) return null;

  return (
    <>
      <GroupHeader
        backgroundColor={feature.color}
        name={feature?.name}
        description={feature?.description}
      />
      <CardWall>
        {phrases.map((p) => (
          <PhraseCard phrase={p} />
        ))}
      </CardWall>
      {/* <Heading>{JSON.stringify(phrases)}</Heading> */}
    </>
  );
};

export default FeaturePage;
