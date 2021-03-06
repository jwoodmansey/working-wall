import firebase from "firebase/app";
import "firebase/firestore";
import { Box, Button, Card, Form, FormField, Main, TextArea } from "grommet";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useHistory, useParams } from "react-router-dom";
import { Feature, selectFeatures } from "../../store/feature/featureSelectors";
import TagInput from "../components/TagInput";

const AddPhrasePage: React.FC = () => {
  const features = useSelector(selectFeatures);
  useFirestoreConnect({ collection: "feature" });
  const history = useHistory();

  const [text, setText] = useState("");
  const params = useParams<{ groupId: string }>();
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const onSelectFeature = (feature: Feature) => {
    if (selectedFeatures.find((f) => f.shortId === feature.shortId)) {
      setSelectedFeatures(
        selectedFeatures.filter((f) => f.shortId !== feature.shortId)
      );
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };
  const onSubmit = async () => {
    await firebase
      .firestore()
      .collection("phrase")
      .add({
        text: text.trim(),
        approved: null,
        groupId: params.groupId,
        selectedFeatures: selectedFeatures.map((s) => s.id),
        createdAt: firebase.firestore.Timestamp.now(),
      });
    history.push(`/${params.groupId}`);
    // eslint-disable-next-line no-alert
    alert("Your idea will show on the wall when it's been approved!");
  };

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <Main pad="small" justify="center" fill alignContent="center">
      <Card width="large" alignSelf="center" pad="small">
        <Form onSubmit={onSubmit}>
          <FormField label="Share your idea…">
            <TextArea
              value={text}
              onChange={onTextChange}
              size="large"
              placeholder="Enter text here"
            />
          </FormField>
          <FormField label="Tag your thought…">
            <TagInput
              onSelectFeature={onSelectFeature}
              features={features}
              selectedFeatures={selectedFeatures}
            />
          </FormField>
          <Box>
            <Button
              primary
              alignSelf="end"
              disabled={
                selectedFeatures.length === 0 || text.trim().length === 0
              }
              type="submit"
              label="Add"
            />
          </Box>
        </Form>
      </Card>
    </Main>
  );
};

export default AddPhrasePage;
