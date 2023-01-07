import React from 'react'

import HeroRow from "../components/HeroRow";
import BuildingHabitsRow from "../components/BuildingHabitsRow";
import ImagineAWorldRow from "../components/ImagineAWorldRow";
import JoinHabitopiansRow from "../components/JoinHabitopiansRow";

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <HeroRow />
        {/* <BuildingHabitsRow />
        <ImagineAWorldRow /> */}
        <JoinHabitopiansRow />
    </div>
  )
}

export default Home