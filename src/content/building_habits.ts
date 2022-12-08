import human from '../assets/human.svg'
import airplane from '../assets/airplane.svg'
import reflection from '../assets/reflection.svg'

const buildingHabits = [
  {
    title: "Build a habit",
    text: "",
    image: human,
    perks: [
      "“Wake up early”",
      "“Go to the gym”",
      "“Meditate”",
      "“Code every day”",
    ],
  },
  {
    title: "Lose it",
    text: "Because of...",
    image: airplane,
    perks: ["travel", "holidays", "busy workload"],
  },
  {
    title: "Re-implement it",
    text: "",
    image: reflection,
    perks: [
      "Find motivation after repeated failures",
      "Fight procrastination",
      "Wait next New years’ resolutions",
    ],
  },
];

export { buildingHabits }