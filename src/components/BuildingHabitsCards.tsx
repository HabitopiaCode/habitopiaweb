import React from 'react'
import CatchPhraseCard from "./CatchPhraseCard";

import { buildingHabits } from '../content/'

type Props = {}

const BuildingHabitsCards = (props: Props) => {
    
  return (
    <div>
      {buildingHabits.map((catchPhrase, index) => (
        <CatchPhraseCard key={index} catchPhrase={catchPhrase} />
      ))}
    </div>
  );
}

export default BuildingHabitsCards

