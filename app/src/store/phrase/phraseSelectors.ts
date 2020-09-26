import { createSelector, Selector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export type Phrase = {
  text: string;
  selectedFeatures: string[];
  groupId: string;
};

export const selectPhrases: Selector<RootState, Phrase[]> = (state) => {
  const { phrase } = state.firestore.data;
  return phrase ? Object.values(phrase) : [];
};

export const selectPhrasesByFeatureId = createSelector(
  [
    selectPhrases,
    (_: RootState, props: { groupId?: string; featureId: string }) => props,
  ],
  (phrases, props) =>
    phrases.find(
      (p) =>
        p.groupId === props.groupId &&
        p.selectedFeatures.includes(props.featureId)
    )
);
