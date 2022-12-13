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
        <HabyButton location={""}>Join the move</HabyButton>
        <div className="large_img">
          <img src={yoga} alt="Imagine" />
        <div className="video_wrapper">
          {/* <img src="https://via.placeholder.com/800x400" alt="Imagine" /> */}
          <center>
            <video className='video' autoPlay loop muted playsInline src={habitopiaWorldGif} />
          </center>          
        </div>
        <TestimonialRow testimonials={one} />
        <ValuePropsRow vp={valueProps[0]} />
        <TestimonialRow testimonials={two} />
        <ValuePropsRow vp={valueProps[1]} />
        <TestimonialRow testimonials={three} />
        <ValuePropsRow vp={valueProps[2]} />
        <TestimonialRow testimonials={four} />
      </div>
    </div>
  );
}

export default ImagineAWorldRow