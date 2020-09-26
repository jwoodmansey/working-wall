import { createSelector, Selector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export type Feature = {
  name: string;
  color: string;
  shortId: string;
  default: boolean;
  groupId: string;
};

export const selectFeatures: Selector<RootState, Feature[]> = (state) => {
  const features = state.firestore.data.feature;
  return features ? Object.values(features) : [];
};

export const selectFeatureByShortId = createSelector(
  [
    selectFeatures,
    (_: RootState, props: { groupId?: string; featureId: string }) => props,
  ],
  (features, props) =>
    features.find(
      (f) =>
        (f.default || f.groupId === props.groupId) &&
        f.shortId === props.featureId
    )
);
