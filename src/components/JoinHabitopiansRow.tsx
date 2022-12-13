import React from 'react'
import HabyButton from "./HabyButton";
import HabyAndHabo from "./HabyAndHabo";

type Props = {}

const JoinHabitopiansRow = (props: Props) => {
  return (
    <div className="habitopians">
      <div className="container">
        <h1>Join Habitopians from all around the world!</h1>
        <p>Get rewarded and have fun by building habits!</p>
        <div className="join_cta">
          {/* <HabyButton location={""} maxWidth={300}>
            Talk to Haby and Habo!
          </HabyButton> */}
          <HabyButton location={"https://docs.google.com/forms/d/e/1FAIpQLSf7YGyG12qvYqsIIG6KrWEAdlb3y_uoymVL1f9pmrMo-wVegA/viewform?usp=sf_link"} maxWidth={300}>
            Download the app!
          </HabyButton>
        </div>
        <HabyAndHabo />
      </div>
    </div>
  );
}

export default JoinHabitopiansRow