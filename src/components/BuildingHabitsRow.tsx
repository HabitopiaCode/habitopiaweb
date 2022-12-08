import React from 'react'
import BuildingHabitsCards from "./BuildingHabitsCards";

type Props = {}

const BuildingHabitsRow = (props: Props) => {
  return (
    <div style={styles.buildingHabits}>
      <h3>
        Building habits is hard and happens 20 times a year in average for genZ.
      </h3>
      <div style={styles.buildingHabitsCards}>
        <BuildingHabitsCards />
      </div>
    </div>
  );
}

const styles = {
  buildingHabits: {
    background: "#686060",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    alignItems: "center",
    padding: "40px 0"
  },
  buildingHabitsCards: {
    maxWidth: "1200px"
  }
} as const;

export default BuildingHabitsRow