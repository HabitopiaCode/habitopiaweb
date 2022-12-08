import React from 'react'
import ValuePropsRow from "./ValuePropsRow";
import { heroVp } from "../content/";

type Props = {}

const HeroRow = (props: Props) => {
  return (
    <div className="hero">
      <div className="container">
        <ValuePropsRow vp={heroVp} />
        {/* <div>
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
        <div>Section 2</div> */}
      </div>
    </div>
  );
}


export default HeroRow