import React from 'react'
import ValuePropsRow from "./ValuePropsRow";
import { heroVp } from "../content/";

type Props = {}

const HeroRow = (props: Props) => {
  return (
    <div className="hero">
      <ValuePropsRow vp={heroVp} />
    </div>
  );
}


export default HeroRow