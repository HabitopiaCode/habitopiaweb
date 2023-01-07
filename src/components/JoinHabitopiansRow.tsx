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
          <HabyButton analyticsName={"final_cta_button"} location={"https://forms.gle/knF3ydBhVgwAHTp47"} maxWidth={300}>
            Get started!
          </HabyButton>
        </div>
        <HabyAndHabo />
      </div>
    </div>
  );
}

export default JoinHabitopiansRow