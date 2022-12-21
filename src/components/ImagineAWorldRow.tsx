import React from 'react'
import TestimonialRow from "./TestimonialRow";
import ValuePropsRow from "./ValuePropsRow";
import HabyButton from "./HabyButton";
import { testimonials, valueProps } from '../content/'
import yoga from '../assets/yoga.jpg'
import habitopiaWorldGif from "../assets/habitopia_world_section.mp4"

type Props = {}

const ImagineAWorldRow = (props: Props) => {
  const { one, two, three, four } = testimonials;
  return (
    <div className="imagine_a_world">
      <div className="container">
        <h1>
          Imagine an <span style={{ color: "#DD09FF" }}>immersive multiplayer world</span> made to build habits{" "}...
        </h1>
        <HabyButton location={""} analyticsName={"join_move_button"}>Join the move</HabyButton>
        <div className="large_img">
          {/* <img src={yoga} alt="Imagine" /> */}
          <div className="video_wrapper">
            <video className='video' autoPlay loop muted playsInline src={habitopiaWorldGif} />     
          </div>
          <ValuePropsRow vp={valueProps[0]} />
          <ValuePropsRow vp={valueProps[1]} />
          <ValuePropsRow vp={valueProps[2]} />
          <TestimonialRow testimonials={one} />
          <TestimonialRow testimonials={two} />
          <TestimonialRow testimonials={three} />
          <TestimonialRow testimonials={four} />
        </div>
      </div>
    </div>
  );
}

export default ImagineAWorldRow