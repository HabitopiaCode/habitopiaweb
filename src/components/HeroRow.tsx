import React from 'react'

type Props = {}

const HeroRow = (props: Props) => {
  return (
    <div style={styles.main}>
      <div className="container">
        <div>
          <h1>
            Habit-building made easy, socially-bonding, rewarding, and fun!
          </h1>
          <p>
            Build any habits by competing and cooperating in fun challenges with
            friends and accountability partners from all around the world and
            get rewarded!
          </p>
          <a href="#">Build your dream habit!</a>
        </div>
        <div>Section 2</div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    background: "#000",
    color: "#fff",
    width: "100%",
    alignItems: "center"
  }
} as const;

export default HeroRow