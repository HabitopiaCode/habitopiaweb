import React from 'react'
import Card from "./core/Card/";

type Props = {
  catchPhrase: {
    title: string;
    text: string;
    perks: string[];
    image: string;
  };
  number: number;
};

const CatchPhraseCard = (props: Props) => {
  const { catchPhrase, number } = props;
  return (
    <Card>
      <div className="catch_phrase">
        <div>
          <h5>{number}. {catchPhrase.title}</h5>
        </div>
        <div className="content">
          <div>
            {catchPhrase.text && <p>{catchPhrase.text}</p>}
            <ul>
              {catchPhrase.perks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={catchPhrase.image} alt="" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CatchPhraseCard