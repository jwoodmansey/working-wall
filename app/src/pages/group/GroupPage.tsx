import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Route, Switch, useParams } from "react-router-dom";
import { selectGroupByShortId } from "../../store/group/groupSelectors";
import { RootState } from "../../store/rootReducer";
import AddPhrasePage from "../add-phrase/AddPhrasePage";
import FeaturePage from "../feature/FeaturePage";
import GroupHeader from "./components/GroupHeader";
import GroupIndexPage from "./GroupIndexPage";

const GroupPage: React.FC = () => {
  const params = useParams<{ groupId: string }>();
  useFirestoreConnect({ collection: "group" });
  const group = useSelector((s: RootState) =>
    selectGroupByShortId(s, params.groupId)
  );
  useFirestoreConnect([
    {
      collection: "feature",
      where: ["default", "==", true],
    },
    {
      collection: "group",
      where: ["shortId", "==", params.groupId],
    },
  ]);

  if (!group) return null;

  return (
    <>
      <GroupHeader name={group?.name} />
      <Switch>
        <Route exact path="/:groupId/add">
          <AddPhrasePage />
        </Route>
        <Route path="/:groupId/:featureId">
          <FeaturePage />
        </Route>
        <Route>
          <GroupIndexPage />
        </Route>
      </Switch>
    </>
  );
};

export default GroupPage;
