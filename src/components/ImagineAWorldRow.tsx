import React from 'react'
import TestimonialRow from "./TestimonialRow";
import ValuePropsRow from "./ValuePropsRow";
import HabyButton from "./HabyButton";
import { testimonials, valueProps } from '../content/'
import yoga from '../assets/yoga.jpg'

type Props = {}

const ImagineAWorldRow = (props: Props) => {
  const { one } = testimonials;
  return (
    <div className="imagine_a_world">
      <div className="container">
        <h1>
          Imagine a <span style={{ color: "#DD09FF" }}>world</span>{" "}
          hypersculpted for habit-building...
        </h1>
        <HabyButton location={""}>Join the move</HabyButton>
        <div className="large_img">
          <img src={yoga} alt="Imagine" />
        </div>
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

export default ImagineAWorldRow