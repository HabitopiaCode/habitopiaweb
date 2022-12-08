import React from 'react'
import BuildingHabitsCards from "./BuildingHabitsCards";

type Props = {}

const BuildingHabitsRow = (props: Props) => {
  return (
    <div className="building_habits">
      <h3>
        Building habits is hard and happens 20 times a year in average for genZ.
      </h3>
      <BuildingHabitsCards />
    </div>
  );
}

export default BuildingHabitsRow