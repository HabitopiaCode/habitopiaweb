import React from 'react'
import TestimonialRow from "./TestimonialRow";
import ValuePropsRow from "./ValuePropsRow";
import HabiButton from "./HabiButton";
import { testimonials, valueProps } from '../content/'

type Props = {}

const ImagineAWorldRow = (props: Props) => {
  const { one } = testimonials;
  return (
    <div style={styles.main}>
      <div className="container">
        <h1>Imagine a world hypersculpted for habit-building...</h1>
        <HabiButton location={""}>Join the move</HabiButton>
        <div>IMAGE GOES HERE</div>
        <TestimonialRow testimonials={one} />
        <ValuePropsRow vp={valueProps[0]} />
        <TestimonialRow testimonials={one} />
        <ValuePropsRow vp={valueProps[1]} />
        <TestimonialRow testimonials={one} />
        <ValuePropsRow vp={valueProps[2]} />
        <TestimonialRow testimonials={one} />
      </div>
    </div>
  );
}

const styles = {
  main: {
    background: "linear-gradient(180deg, rgb(221 9 255 / 15%), rgb(231 18 3 / 15%), rgb(9 66 255 / 15%), rgb(99 21 58 / 15%))",
    display: "flex",
    padding: "150px 0",
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  }
} as const;

export default ImagineAWorldRow