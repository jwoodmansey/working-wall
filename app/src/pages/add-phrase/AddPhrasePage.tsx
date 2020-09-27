import firebase from "firebase/app";
import "firebase/firestore";
import { Box, Button, Card, Form, FormField, Main, TextArea } from "grommet";
import { Alert } from "grommet-icons";
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
        text,
        approved: null,
        groupId: params.groupId,
        selectedFeatures: selectedFeatures.map((s) => s.id),
        createdAt: firebase.firestore.Timestamp.now(),
      });
    history.push(`/${params.groupId}`);
    alert("Your idea will show on the wall when it's been approved!");
  };

  return (
    <>
      {/* <Heading>Share your idea…</Heading> */}
      <Main pad="small" justify="center" fill alignContent="center">
        <Card width="large" alignSelf="center" pad="small">
          <Form onSubmit={onSubmit}>
            <FormField label="Share your idea…">
              <TextArea
                value={text}
                onChange={(event) => setText(event.target.value)}
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
              <Button primary alignSelf="end" type="submit" label="Add" />
            </Box>
          </Form>
        </Card>
      </Main>
    </>
  );
};

export default AddPhrasePage;
