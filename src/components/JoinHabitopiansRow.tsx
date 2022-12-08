import React from 'react'
import HabiButton from "./HabiButton";
import HabyAndHabo from "./HabyAndHabo";

type Props = {}

const JoinHabitopiansRow = (props: Props) => {
  return (
    <div style={styles.main}>
      <div className="container">
        <h1>Join Habitopians from all around the world!</h1>
        <p>Get rewarded and have fun by building habits!</p>
        <HabiButton bg_color={""} txt_color={""} location={""}>
          Talk to Haby and Habo!
        </HabiButton>
        <HabyAndHabo />
      </div>
    </div>
  );
}

const styles = {
  main: {
    background: "#000",
    color: "#fff"
  }
} as const;

export default JoinHabitopiansRow