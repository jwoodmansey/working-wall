import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useParams } from "react-router-dom";
import { selectFeatureByShortId } from "../../store/feature/featureSelectors";
import { RootState } from "../../store/rootReducer";
import GroupHeader from "../group/components/GroupHeader";

const FeaturePage: React.FC = () => {
  const params = useParams<{ groupId: string; featureId: string }>();
  useFirestoreConnect({
    collection: "feature",
  });
  const feature = useSelector((s: RootState) =>
    selectFeatureByShortId(s, params)
  );
  if (!feature) return null;

  return (
    <>
      <GroupHeader name={feature?.name} />
    </>
  );
};

export default FeaturePage;
