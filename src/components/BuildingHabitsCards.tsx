import React from 'react'
import CatchPhraseCard from "./CatchPhraseCard";

import { buildingHabits } from '../content/'

type Props = {}

const BuildingHabitsCards = (props: Props) => {
    
  return (
    <div className="cards">
      {buildingHabits.map((catchPhrase, index) => (
        <CatchPhraseCard key={index} catchPhrase={catchPhrase} number={index+1} />
      ))}
    </div>
  );
}

export default BuildingHabitsCards

