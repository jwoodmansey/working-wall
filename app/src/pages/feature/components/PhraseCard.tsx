import { Anchor, Card, CardBody, CardFooter } from "grommet";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Phrase } from "../../../store/phrase/phraseSelectors";

type Props = {
  phrase: Phrase;
};

const PhraseCard: React.FC<Props> = ({ phrase }) => {
  const params = useParams<{ groupId: string }>();
  return (
    <Card width="small" margin="small" animation="fadeIn">
      <CardBody pad="medium">{phrase.text}</CardBody>
      <CardFooter pad="small">
        {phrase.populatedFeatures.map((f) => (
          <Link to={`/${params.groupId}/${f?.shortId}`}>
            <Anchor size="xsmall">{f?.name}</Anchor>
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
};

export default PhraseCard;
