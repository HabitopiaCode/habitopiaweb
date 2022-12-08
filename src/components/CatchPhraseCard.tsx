import React from 'react'
import Card from "./core/Card/";

type Props = {
  catchPhrase: {
    title: string;
    text: string;
    perks: string[];
    image: string;
  }
}

const CatchPhraseCard = (props: Props) => {
  return (
    <Card>
      <div>
          <div>
            <h5>{props.catchPhrase.title}</h5>
          </div>
          <div>
            <div>
              {props.catchPhrase.text && (<p>{props.catchPhrase.text}</p>)}
              <ul>
                {props.catchPhrase.perks.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
            <div>
              <img src={props.catchPhrase.image} alt="" />
            </div>
          </div>
      </div>
    </Card>
  )
}

export default CatchPhraseCard