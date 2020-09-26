import { createSelector, Selector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

export type Group = {
  name: string;
  id: string;
  shortId: string;
};

export const selectAllGroups: Selector<RootState, Group[]> = (
  state: RootState
) => {
  const groups = state.firestore.data.group;
  return groups ? Object.values(groups) : [];
};

export const selectGroupByShortId = createSelector(
  [selectAllGroups, (_: RootState, props: string) => props],
  (groups, shortId) => groups.find((g) => g.shortId === shortId)
);
