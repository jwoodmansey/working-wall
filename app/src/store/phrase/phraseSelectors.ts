import { createSelector, Selector } from "@reduxjs/toolkit";
import { Feature, selectFeatures } from "../feature/featureSelectors";
import { RootState } from "../rootReducer";

export type Phrase = {
  text: string;
  selectedFeatures: string[];
  populatedFeatures: (Feature | undefined)[];
  groupId: string;
};

export const selectPhrases: Selector<RootState, Phrase[]> = (state) => {
  const { phrase } = state.firestore.data;
  return phrase ? Object.values(phrase) : [];
};

export const selectPhrasesByFeatureId = createSelector(
  [
    selectPhrases,
    selectFeatures,
    (_: RootState, props: { groupId?: string; featureId: string }) => props,
  ],
  (phrases, features, props) => {
    console.log("PROPS", props, phrases);
    return phrases
      .filter(
        (p) =>
          p.groupId === props.groupId &&
          p.selectedFeatures.includes(props.featureId)
      )
      .map((p) => ({
        ...p,
        populatedFeatures: p.selectedFeatures.map((sf) =>
          features.find((f) => f.id === sf)
        ),
      }));
  }
);
